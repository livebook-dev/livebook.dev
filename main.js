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

function getSettings() {
  try {
    const json = localStorage.getItem(SETTINGS_KEY);

    if (json) {
      return JSON.parse(json);
    }
  } catch (error) {
    console.error(error);
  }

  return {
    livebookUrl: "",
  };
}

function setSettings(settings) {
  try {
    const json = JSON.stringify(settings);
    localStorage.setItem(SETTINGS_KEY, json);
  } catch (error) {
    console.error(error);
  }
}

const livebookUrlInput = document.querySelector("[data-settings-livebook-url");

if (livebookUrlInput) {
  const settings = getSettings();
  livebookUrlInput.value = settings.livebookUrl;

  livebookUrlInput.addEventListener("input", (event) => {
    const livebookUrl = event.target.value;
    setSettings({ livebookUrl });
  });
}
