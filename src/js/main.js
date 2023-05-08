import { ensureHttpScheme, getNotebookContent } from "./requests";
import { settingsStore } from "./settings_store";
import {
  getRunUrl,
  getLivebookImportUrl,
  getBadgeUrl,
  getLivebookHealthUrls,
} from "./urls";
import { debounce, firstSuccess } from "./utils";

// === Mobile menu ===

{
  const menuContainerEl = document.querySelector(`[data-el="menu-container"]`);

  menuContainerEl.addEventListener("click", (event) => {
    const toggleEl = event.target.closest(`[data-el="menu-toggle"]`);

    if (toggleEl) {
      menuContainerEl.toggleAttribute("data-menu-open");
      return;
    }

    const anchorEl = event.target.closest("a");

    if (
      anchorEl &&
      anchorEl.href &&
      anchorEl.getAttribute("href").startsWith("/#")
    ) {
      menuContainerEl.removeAttribute("data-menu-open");
    }
  });
}

// === Clipboard copy ===

if ("clipboard" in navigator) {
  const clipCopyEls = document.querySelectorAll("[data-clip-copy-target]");

  for (const clipCopyEl of clipCopyEls) {
    const targetSelector = clipCopyEl.getAttribute("data-clip-copy-target");
    const targetEl = document.querySelector(targetSelector);

    if (targetEl) {
      clipCopyEl.addEventListener("click", (event) => {
        event.preventDefault();
        const text = targetEl.textContent;
        navigator.clipboard.writeText(text);
      });
    }
  }
}

// === Tabs ===

for (const tabsEl of document.querySelectorAll(`[data-el="tabs"]`)) {
  const tabLinkEls = tabsEl.querySelectorAll("[data-tab-target]");

  tabsEl.addEventListener("click", (event) => {
    event.preventDefault();

    const clickedTabLinkEl = event.target.closest("[data-tab-target]");

    if (clickedTabLinkEl) {
      const clickedTargetSelector =
        clickedTabLinkEl.getAttribute("data-tab-target");

      for (const tabLinkEl of tabLinkEls) {
        const targetSelector = tabLinkEl.getAttribute("data-tab-target");
        const targetEl = document.querySelector(targetSelector);
        const isClicked = targetSelector === clickedTargetSelector;
        tabLinkEl.classList.toggle("active", isClicked);
        tabLinkEl.setAttribute("aria-selected", isClicked ? "true" : "false");
        targetEl.toggleAttribute("data-tab-active", isClicked);
      }
    }
  });
}

// === Badge page ===

if (document.body.dataset.page === "badge") {
  const badgeUrlInputEl = document.querySelector(
    `[data-el="badge-notebook-url-input"]`
  );
  const badgeButtonsContainerEl = document.querySelector(
    `[data-el="badge-buttons-container"]`
  );

  if (badgeUrlInputEl && badgeButtonsContainerEl) {
    const markdownSourceEl = document.querySelector("#badge-source-markdown");
    const htmlSourceEl = document.querySelector("#badge-source-html");

    function updateBadgeSnippets() {
      const activeButtonEl = document.querySelector(
        `[data-el="badge-button"][data-badge-button-active]`
      );

      const wasBadgeReady = document.body.hasAttribute("data-badge-ready");
      const isBadgeReady = !!badgeUrlInputEl.value && !!activeButtonEl;

      document.body.toggleAttribute("data-badge-ready", isBadgeReady);

      if (isBadgeReady) {
        const notebookUrl = badgeUrlInputEl.value;
        const badgeType = activeButtonEl.getAttribute("data-badge-type");
        const badgeUrl = getBadgeUrl(badgeType);
        const runUrl = getRunUrl(notebookUrl);
        markdownSourceEl.textContent = `[![Run in Livebook](${badgeUrl})](${runUrl})`;
        htmlSourceEl.textContent = `<a href="${runUrl}">\n  <img src="${badgeUrl}" alt="Run in Livebook" />\n</a>`;

        if (!wasBadgeReady) {
          const badgeResult = document.querySelector(
            `[data-el="badge-result"]`
          );
          badgeResult.scrollIntoView({ behavior: "smooth", block: "end" });
        }
      }
    }

    badgeUrlInputEl.addEventListener("input", (event) => updateBadgeSnippets());

    badgeButtonsContainerEl.addEventListener("click", (event) => {
      const buttonEl = event.target.closest(`[data-el="badge-button"]`);

      if (buttonEl) {
        const activeButtonEl = document.querySelector(
          `[data-el="badge-button"][data-badge-button-active]`
        );

        if (activeButtonEl) {
          activeButtonEl.removeAttribute("data-badge-button-active");
          activeButtonEl.removeAttribute("aria-selected");
        }

        buttonEl.setAttribute("data-badge-button-active", "");
        buttonEl.setAttribute("aria-selected", "true");

        updateBadgeSnippets();
      }
    });
  }
}

// === Settings ===

if (
  document.body.dataset.page === "settings" ||
  document.body.dataset.page === "run"
) {
  const livebookUrlInputEl = document.querySelector(
    `[data-el="livebook-url-input"]`
  );
  const livebookStatusEl = document.querySelector(
    `[data-el="livebook-status"]`
  );
  const livebookDesktopToggleEl = document.querySelector(
    `[data-el="livebook-desktop-toggle"]`
  );

  function setLivebookStatus(status) {
    livebookStatusEl.setAttribute("data-status", status);
  }

  function checkLivebookStatus(livebookUrl) {
    setLivebookStatus("checking");

    firstSuccess(getLivebookHealthUrls(livebookUrl), checkLivebookHealth)
      .then(() => setLivebookStatus("up"))
      .catch(() => setLivebookStatus("down"));
  }

  function checkLivebookHealth(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (json.application === null) {
          return Promise.reject(
            new Error("application running, but it's not Livebook")
          );
        }
      });
  }

  const debouncedCheckLivebookStatus = debounce(checkLivebookStatus, 500);

  function toggleLivebookDesktop(enabled) {
    if (enabled) {
      setLivebookStatus("desktop");
      livebookUrlInputEl.disabled = true;
      livebookUrlInputEl.setAttribute("aria-disabled", "true");
      settingsStore.update({ useLivebookDesktop: true });
    } else {
      livebookUrlInputEl.disabled = false;
      livebookUrlInputEl.setAttribute("aria-disabled", "false");
      settingsStore.update({ useLivebookDesktop: false });
      livebookUrlInputEl.dispatchEvent(new Event("input"));
    }
  }

  if (livebookUrlInputEl) {
    const { livebookUrl, useLivebookDesktop } = settingsStore.get();
    livebookUrlInputEl.value = livebookUrl;
    livebookDesktopToggleEl.checked = useLivebookDesktop;
    toggleLivebookDesktop(useLivebookDesktop);

    if (livebookUrl && !useLivebookDesktop) {
      checkLivebookStatus(livebookUrl);
    }

    livebookUrlInputEl.addEventListener("input", (event) => {
      const value = event.target.value;
      // Normalize the URL
      const livebookUrl = value && ensureHttpScheme(value);
      settingsStore.update({ livebookUrl });

      if (livebookUrl) {
        setLivebookStatus("checking");
        debouncedCheckLivebookStatus(livebookUrl);
      } else {
        setLivebookStatus(null);
      }
    });

    livebookUrlInputEl.addEventListener("blur", (event) => {
      // Reflect the normalized URL in the input
      event.target.value = settingsStore.get().livebookUrl;
    });

    livebookDesktopToggleEl.addEventListener("change", (event) => {
      toggleLivebookDesktop(event.target.checked);
    });
  }
}

// === Run page ===

if (document.body.dataset.page === "run") {
  const runNotebookLinkEls = document.querySelectorAll(
    `[data-el="run-notebook-link"]`
  );
  const notebookPreviewEl = document.querySelector(
    `[data-el="notebook-preview"]`
  );
  const notebookSourceLinkEl = document.querySelector(
    `[data-el="notebook-source-link"]`
  );
  const livebookUrlEl = document.querySelector(`[data-el="livebook-url"]`);
  const livebookUrlIntroEl = document.querySelector(
    `[data-el="livebook-url-intro"]`
  );

  const params = new URLSearchParams(window.location.search);
  const notebookUrl = params.get("url");

  // If notebook url is missing, we just redirect to the homepage
  if (!notebookUrl) {
    window.location.href = "/";
  }

  function updateRunNotebookLinks(url, intro, caption) {
    for (const runNotebookLinkEl of runNotebookLinkEls) {
      runNotebookLinkEl.setAttribute("href", url);
    }
    livebookUrlIntroEl.textContent = intro;
    livebookUrlEl.textContent = caption;
  }

  settingsStore.getAndSubscribe(({ livebookUrl, useLivebookDesktop }) => {
    if (useLivebookDesktop) {
      updateRunNotebookLinks(
        notebookUrl.replace(/^https?:/i, "livebook:"),
        "",
        "in your Livebook Desktop"
      );
    } else {
      const livebookImportUrl = getLivebookImportUrl(livebookUrl, notebookUrl);
      updateRunNotebookLinks(
        livebookImportUrl,
        "in your Livebook at",
        livebookUrl
      );
    }
    document.body.toggleAttribute(
      "data-run-ready",
      livebookUrl !== "" || useLivebookDesktop
    );
  });

  notebookSourceLinkEl.setAttribute("href", notebookUrl);

  getNotebookContent(notebookUrl)
    .then((livemd) => {
      notebookPreviewEl.textContent = livemd;
      notebookPreviewEl.classList.add("whitespace-pre-wrap");
    })
    .catch((error) => {
      console.error(`Failed to fetch notebook from ${notebookUrl}, ${error}`);
      const div = document.createElement("div");
      div.classList.add("max-w-md");
      div.textContent = `
        Oops! We could not load notebook preview from ${notebookUrl}, but you can still run it!
      `;
      notebookPreviewEl.innerHTML = "";
      notebookPreviewEl.appendChild(div);
    });
}

// === Integrations Page ===

if (document.body.dataset.page === "integrations") {
  document.querySelector("#integrations").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-type]");
    if (button) {
      filterSelection(button.dataset.type);
    }
  });

  document
    .querySelector(".integration-select")
    .addEventListener("change", (event) => {
      filterSelection(event.target.value);
    });

  const params = new URLSearchParams(window.location.search);
  const integrationType = params.get("type");

  if (integrationType) {
    filterSelection(integrationType);
  }

  function filterSelection(integrationType) {
    const cards = document.querySelectorAll("div[data-type]");

    for (const card of cards) {
      card.classList.toggle(
        "hidden",
        card.dataset.type !== integrationType && integrationType !== "all"
      );
    }

    const buttons = document.querySelectorAll("button[data-type]");

    for (const button of buttons) {
      button.classList.toggle(
        "button-integration-active",
        button.dataset.type === integrationType
      );
    }

    // Update the URL

    const url = new URL(window.location.href);

    if (integrationType === "all") {
      url.searchParams.delete("type");
    } else {
      url.searchParams.set("type", integrationType);
    }

    history.pushState(null, "", url.toString());
  }
}

// Add underline class to menu links on Mobile

function setActiveMenuItem() {
  const currentPath = window.location.pathname;
  const menuItems = document.querySelectorAll("nav a");

  menuItems.forEach((item) => {
    const itemPathname = item.pathname;
    const shouldBeUnderlined = itemPathname !== "/" && currentPath.startsWith(itemPathname);

    item.classList.toggle("border-b-2", shouldBeUnderlined);
    item.classList.toggle("border-gray-600", shouldBeUnderlined);
  });
}

setActiveMenuItem();

// Change header style

const header = document.querySelector("#header");
const headerMobile = document.querySelector("#header-mobile");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 1;
  header.classList.toggle("scrolled", scrolled);
  headerMobile.classList.toggle("scrolled", scrolled);
});
