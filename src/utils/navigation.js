export function isPathActive(path, url) {
  return url.pathname.startsWith(path);
}
