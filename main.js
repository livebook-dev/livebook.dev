// Mobile menu
const menu = document.querySelector("[data-menu-container]");

menu.addEventListener("click", (event) => {
  const toggleButton = event.target.closest("[data-menu-toggle]");

  if (toggleButton) {
    menu.toggleAttribute("data-menu-open");
    return;
  }

  const anchor = event.target.closest("a");

  if (anchor && anchor.href && anchor.getAttribute("href").startsWith("#")) {
    menu.removeAttribute("data-menu-open");
  }
});

// Register clipboard copy handlers
if ("clipboard" in navigator) {
  const clipCopyButtons = document.querySelectorAll("[data-clip-copy-target]");

  for (const button of clipCopyButtons) {
    const targetSelector = button.getAttribute("data-clip-copy-target");
    const target = document.querySelector(targetSelector);

    if (target) {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const text = target.innerText;
        navigator.clipboard.writeText(text);
      });
    }
  }
}

// Tabs
const tabsContainers = document.querySelectorAll("[data-tabs]");

for (const tabsContainer of tabsContainers) {
  const tabs = tabsContainer.querySelectorAll("[data-target]");

  tabsContainer.addEventListener("click", (event) => {
    event.preventDefault();
    const clickedTab = event.target.closest("[data-target]");
    if (clickedTab) {
      const clickedTargetSelector = clickedTab.getAttribute("data-target");

      for (const tab of tabs) {
        const targetSelector = tab.getAttribute("data-target");
        const target = document.querySelector(targetSelector);
        const isClicked = targetSelector === clickedTargetSelector;
        tab.classList.toggle("active", isClicked);
        target.toggleAttribute("data-tab-active", isClicked);
      }
    }
  });
}

// Badges

const badgeInput = document.querySelector("[data-badge-notebook-url]");
const badgeButtonsContainer = document.querySelector(
  "[data-badge-buttons-container]"
);

// TODO point to github
const badgeUrlByType = {
  blue: "raw.github.TODO.blue",
  black: "raw.github.TODO.black",
  gray: "raw.github.TODO.gray",
  pink: "raw.github.TODO.pink",
};

if (badgeInput && badgeButtonsContainer) {
  const markdownSourceEl = document.querySelector("#badge-source-markdown");
  const htmlSourceEl = document.querySelector("#badge-source-html");

  function onBadge() {
    const activeButton = document.querySelector(
      "[data-badge-button][data-badge-button-active]"
    );

    const badgeReady = !!badgeInput.value && !!activeButton;

    if (badgeReady) {
      const userUrl = badgeInput.value;
      const badgeType = activeButton.getAttribute("data-badge-type");
      const badgeUrl = badgeUrlByType[badgeType];
      const runUrl = `${window.location.origin}/run?url=${encodeURIComponent(
        userUrl
      )}`;
      markdownSourceEl.textContent = `[![Run in Livebook](${badgeUrl})](${runUrl})`;
      htmlSourceEl.textContent = `<a href="${runUrl}">\n  <img src="${badgeUrl}" alt="Run in Livebook" />\n</a>`;
    }

    document.body.toggleAttribute("data-badge-ready", badgeReady);
  }

  badgeInput.addEventListener("input", (event) => onBadge());

  badgeButtonsContainer.addEventListener("click", (event) => {
    const button = event.target.closest("[data-badge-button]");

    if (button) {
      const activeButton = document.querySelector("[data-badge-button-active]");

      if (activeButton) {
        activeButton.removeAttribute("data-badge-button-active");
      }

      button.setAttribute("data-badge-button-active", "");

      onBadge();
    }
  });
}

// Settings

const SETTINGS_KEY = "livebook:settings";
const DEFAULT_SETTINGS = { livebookUrl: "" };

class SettingsStore {
  constructor() {
    this._subscribers = [];
    this._settings = DEFAULT_SETTINGS;

    this._loadSettings();
  }

  get() {
    return this._settings;
  }

  update(newSettings) {
    const prevSettings = this._settings;
    this._settings = { ...this._settings, ...newSettings };
    this._subscribers.forEach((callback) =>
      callback(this._settings, prevSettings)
    );
    this._storeSettings();
  }

  getAndSubscribe(callback) {
    this._subscribers.push(callback);
    callback(this._settings);
  }

  _loadSettings() {
    try {
      const json = localStorage.getItem(SETTINGS_KEY);

      if (json) {
        const settings = JSON.parse(json);
        this._settings = { ...this._settings, ...settings };
      }
    } catch (error) {
      console.error(error);
    }
  }

  _storeSettings() {
    try {
      const json = JSON.stringify(this._settings);
      localStorage.setItem(SETTINGS_KEY, json);
    } catch (error) {
      console.error(error);
    }
  }
}

const settingsStore = new SettingsStore();

const livebookUrlInput = document.querySelector("[data-settings-livebook-url");

if (livebookUrlInput) {
  livebookUrlInput.value = settingsStore.get().livebookUrl;

  livebookUrlInput.addEventListener("input", (event) => {
    const livebookUrl = event.target.value;
    settingsStore.update({ livebookUrl });
  });
}

// Run

// See https://github.com/livebook-dev/livebook/blob/main/lib/livebook/content_loader.ex
function rewriteUrl(urlString) {
  // TODO this throws on invalid url
  const url = new URL(urlString);

  if (url.host === "github.com") {
    const [_empty, owner, repo, _blob, hash, ...fileSegments] =
      url.pathname.split("/");
    const path = ["", owner, repo, hash, ...fileSegments].join("/");
    url.hostname = "raw.githubusercontent.com";
    url.pathname = path;
  } else if (url.host === "gist.github.com") {
    const [_empty, owner, hash] = url.pathname.split("/");
    const path = ["", owner, hash, "raw"].join("/");
    url.hostname = "gist.githubusercontent.com";
    url.pathname = path;
  }

  return url.toString();
}

const runNotebookLink = document.querySelector("[data-run-notebook-link]");
const notebookPreviewContainer = document.querySelector(
  "[data-notebook-preview-container]"
);
const notebookSourceLink = document.querySelector(
  "[data-notebook-source-link]"
);
const livebookUrlEl = document.querySelector("[data-livebook-url]");

if (runNotebookLink) {
  const params = new URLSearchParams(window.location.search);
  const notebookUrl = params.get("url");

  // If notebook url is missing, we just redirect to the homepage
  if (!notebookUrl) {
    window.location.href = "/";
  }

  settingsStore.getAndSubscribe(({ livebookUrl }) => {
    const livebookImportUrl = `${livebookUrl}?import_url${encodeURIComponent(
      notebookUrl
    )}`;
    runNotebookLink.setAttribute("href", livebookImportUrl);
    livebookUrlEl.textContent = livebookUrl;
    document.body.toggleAttribute("data-run-ready", livebookUrl !== "");
  });

  if (notebookUrl) {
    notebookSourceLink.setAttribute("href", notebookUrl);

    // TODO handle rewrites similarly to livebook
    fetch(rewriteUrl(notebookUrl))
      .then((response) => {
        const contentTypeHeader = response.headers.get("content-type");
        if (contentTypeHeader) {
          const contentType = contentTypeHeader.split(";")[0];
          if (!["text/plain", "text/markdown"].includes(contentType)) {
            return Promise.reject(
              new Error(
                `Expected Content-Type to be either text/plain or text/markdown, got: ${contentType}`
              )
            );
          }
        }
        return response;
      })
      .then((response) => response.text())
      .then((livemd) => {
        notebookPreviewContainer.textContent = livemd;
        notebookPreviewContainer.classList.add("whitespace-pre-wrap");
      })
      .catch((error) => {
        notebookPreviewContainer.innerHTML = `
          <div class="max-w-2xl w-full flex-1 space-y-3 max-h-full overflow-y-hidden">
            <div class="bg-gray-700 h-3 rounded-md w-1/4"></div>
            <div class="bg-transparent h-3 rounded-md"></div>
            <div class="bg-gray-700 h-3 rounded-md w-11/12"></div>
            <div class="bg-gray-700 h-3 rounded-md w-5/6"></div>
            <div class="bg-gray-700 h-3 rounded-md w-3/4"></div>
            <div class="bg-transparent h-3 rounded-md"></div>
            <div class="bg-gray-700 h-3 rounded-md w-3/4"></div>
            <div class="bg-gray-700 h-3 rounded-md w-11/12"></div>
            <div class="bg-gray-700 h-3 rounded-md w-5/6"></div>
            <div class="bg-transparent h-3 rounded-md"></div>
            <div class="bg-gray-700 h-3 rounded-md w-3/4"></div>
            <div class="bg-gray-700 h-3 rounded-md w-11/12"></div>
            <div class="bg-gray-700 h-3 rounded-md w-5/6"></div>
            <div class="bg-transparent h-3 rounded-md"></div>
            <div class="bg-gray-700 h-3 rounded-md w-3/4"></div>
            <div class="bg-gray-700 h-3 rounded-md w-11/12"></div>
            <div class="bg-gray-700 h-3 rounded-md w-5/6"></div>
          </div>
        `;
        console.error(`Failed to fetch notebook from ${notebookUrl}, ${error}`);
      });
  }
}
