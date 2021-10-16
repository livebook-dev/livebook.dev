import { getNotebookContent } from "./requests";
import { settingsStore } from "./settings_store";
import { getRunUrl, getLivebookImportUrl, getBadgeUrl } from "./urls";

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
      anchorEl.getAttribute("href").startsWith("#")
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
        }

        buttonEl.setAttribute("data-badge-button-active", "");

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

  if (livebookUrlInputEl) {
    livebookUrlInputEl.value = settingsStore.get().livebookUrl;

    livebookUrlInputEl.addEventListener("input", (event) => {
      const livebookUrl = event.target.value;
      settingsStore.update({ livebookUrl });
    });
  }
}

// === Run page ===

if (document.body.dataset.page === "run") {
  const runNotebookLinkEl = document.querySelector(
    `[data-el="run-notebook-link"]`
  );
  const notebookPreviewEl = document.querySelector(
    `[data-el="notebook-preview"]`
  );
  const notebookSourceLinkEl = document.querySelector(
    `[data-el="notebook-source-link"]`
  );
  const livebookUrlEl = document.querySelector(`[data-el="livebook-url"]`);

  const params = new URLSearchParams(window.location.search);
  const notebookUrl = params.get("url");

  // If notebook url is missing, we just redirect to the homepage
  if (!notebookUrl) {
    window.location.href = "/";
  }

  settingsStore.getAndSubscribe(({ livebookUrl }) => {
    const livebookImportUrl = getLivebookImportUrl(livebookUrl, notebookUrl);
    runNotebookLinkEl.setAttribute("href", livebookImportUrl);
    livebookUrlEl.textContent = livebookUrl;
    document.body.toggleAttribute("data-run-ready", livebookUrl !== "");
  });

  notebookSourceLinkEl.setAttribute("href", notebookUrl);

  getNotebookContent(notebookUrl)
    .then((livemd) => {
      notebookPreviewEl.textContent = livemd;
      notebookPreviewEl.classList.add("whitespace-pre-wrap");
    })
    .catch((error) => {
      console.error(`Failed to fetch notebook from ${notebookUrl}, ${error}`);
      // Show content placeholder instead
      notebookPreviewEl.innerHTML = `
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
    });
}
