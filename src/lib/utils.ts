/**
 * Returns a debounced function, so that the actual execution
 * is triggered only when there are no more calls within the
 * specified number of milliseconds.
 */
export function debounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  milliseconds: number,
): (...args: Args) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function debouncedFunction(...args: Args) {
    if (timeout !== null) {
      clearTimeout(timeout);
    }

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
 */
export function firstSuccess<Item, Result>(
  list: Item[],
  toPromise: (item: Item) => Promise<Result>,
): Promise<Result> {
  return list
    .reduce<Promise<Result>>(
      (promise, item) => promise.catch(() => toPromise(item)),
      Promise.reject(null),
    )
    .catch(() => Promise.reject(new Error("No success")));
}

/**
 * Checks if the given URL's pathname starts with the specified path.
 * Used to determine if a navigation path is active in the current URL.
 */
export function isPathActive(path: string, url: URL): boolean {
  return url.pathname.startsWith(path);
}

/**
 * Formats a date as in "January 30, 2023".
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
