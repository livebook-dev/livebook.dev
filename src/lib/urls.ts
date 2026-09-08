const WEBSITE_ROOT = "https://livebook.dev";

export type BadgeType = "blue" | "black" | "gray" | "pink";

/**
 * Website run page for the given notebook URL.
 */
export function getRunUrl(notebookUrl: string): string {
  return `${WEBSITE_ROOT}/run?url=${encodeURIComponent(notebookUrl)}`;
}

/**
 * Livebook endpoint importing the given notebook.
 */
export function getLivebookImportUrl(
  livebookUrl: string,
  notebookUrl: string,
): string {
  return `${livebookUrl}/import?url=${encodeURIComponent(notebookUrl)}`;
}

/**
 * Livebook health endpoints.
 */
export function getLivebookHealthUrls(livebookUrl: string): string[] {
  // Note: /health is a legacy endpoint
  return [`${livebookUrl}/public/health`, `${livebookUrl}/health`];
}

/**
 * Badge image URL.
 */
export function getBadgeUrl(badgeType: BadgeType): string {
  return `${WEBSITE_ROOT}/badge/v1/${badgeType}.svg`;
}
