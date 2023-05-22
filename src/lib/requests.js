/**
 * Fetches notebook content from the given location.
 */
export function getNotebookContent(url) {
  const contentUrl = rewriteNotebookUrl(url);

  return fetch(contentUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const contentType = contentTypeFromHeaders(response.headers);

      if (
        contentType &&
        !["text/plain", "text/markdown", "application/octet-stream"].includes(
          contentType
        )
      ) {
        return Promise.reject(
          new Error(
            `Expected Content-Type to be either text/plain, text/markdown or application/octet-stream, got: ${contentType}`
          )
        );
      }

      return response;
    })
    .then((response) => response.text());
}

/**
 * Rewrite known URLs, so that they point to plain text
 * file rather than HTML.
 *
 * This matches Livebook import behaviour,
 * see https://github.com/livebook-dev/livebook/blob/main/lib/livebook/content_loader.ex
 */
function rewriteNotebookUrl(urlString) {
  try {
    const url = new URL(urlString);

    if (url.host === "github.com") {
      const [_empty, owner, repo, _blob, hash, ...fileSegments] =
        url.pathname.split("/");
      const path = ["", owner, repo, hash, ...fileSegments].join("/");
      url.hostname = "raw.githubusercontent.com";
      url.pathname = path;
    } else if (url.host === "gist.github.com") {
      const [_empty, owner, hash] = url.pathname.split("/");
      const path = ["", owner, hash, "raw"].join("/");
      url.hostname = "gist.githubusercontent.com";
      url.pathname = path;
    }

    return url.toString();
  } catch (error) {
    return urlString;
  }
}

function contentTypeFromHeaders(headers) {
  const contentTypeHeader = headers.get("content-type");

  if (!contentTypeHeader) {
    return null;
  }

  return contentTypeHeader.split(";")[0];
}

/**
 * Adds http(s) scheme to the given url if missing.
 */
export function ensureHttpScheme(url) {
  if (!url.includes("://")) {
    try {
      const parsed = new URL(`http://${url}`);
      if (parsed.hostname === "localhost") {
        return `http://${url}`;
      } else {
        return `https://${url}`;
      }
    } catch (error) {}
  }

  return url;
}
