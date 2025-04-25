/**
 * Returns a debounced function, so that the actual execution
 * is triggered only when there are no more calls within the
 * specified number of milliseconds.
 *
 * @param {Function} fn
 * @param {Number} milliseconds
 */
export function debounce(fn, milliseconds) {
  let timeout;

  return function debouncedFunction(...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;
      fn(...args);
    }, milliseconds);
  };
}

/**
 * Tries the given async function on each element of the list,
 * until the first successful resolution.
 *
 * Returns a Promise resolving to the first successful result,
 * or rejected when all items fail.
 *
 * @param {Array} list
 * @param {Function} toPromise
 */
export function firstSuccess(list, toPromise) {
  return list
    .reduce(
      (promise, item) => promise.catch(() => toPromise(item)),
      Promise.reject(null)
    )
    .catch(() => Promise.reject(new Error("No success")));
}

/**
 * Checks if the given URL's pathname starts with the specified path.
 * Used to determine if a navigation path is active in the current URL.
 *
 * @param {String} path - The path to check against
 * @param {URL} url - The URL object to check
 * @returns {Boolean} - True if the URL pathname starts with the given path
 */
export function isPathActive(path, url) {
  return url.pathname.startsWith(path);
}
