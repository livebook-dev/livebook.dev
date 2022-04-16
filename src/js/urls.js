const WEBSITE_ROOT = "https://livebook.dev";

/**
 * Website run page for the given notebook URL.
 */
export function getRunUrl(notebookUrl) {
  return `${WEBSITE_ROOT}/run?url=${encodeURIComponent(notebookUrl)}`;
}

/**
 * Livebook endpoint importing the given notebook.
 */
export function getLivebookImportUrl(livebookUrl, notebookUrl) {
  return `${livebookUrl}/import?url=${encodeURIComponent(notebookUrl)}`;
}

/**
 * Livebook health endpoints.
 */
export function getLivebookHealthUrls(livebookUrl) {
  // TODO: /health became a legacy endpoint, swap the order in a few versions
  return [`${livebookUrl}/health`, `${livebookUrl}/public/health`];
}

/**
 * Badge image URL.
 */
export function getBadgeUrl(badgeType) {
  return `${WEBSITE_ROOT}/badge/v1/${badgeType}.svg`;
}
