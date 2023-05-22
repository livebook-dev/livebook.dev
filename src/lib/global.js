// Clipboard copy

if ("clipboard" in window.navigator) {
  window.addEventListener("click", (event) => {
    const element = event.target.closest("[data-clip-copy-target]");

    if (element) {
      const targetSelector = element.getAttribute("data-clip-copy-target");
      const targetEl = document.querySelector(targetSelector);

      if (targetEl) {
        event.preventDefault();
        const text = targetEl.textContent;
        navigator.clipboard.writeText(text);
      }
    }
  });
}
