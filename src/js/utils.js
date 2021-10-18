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
