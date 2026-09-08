import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";

import tailwindcss from "@tailwindcss/vite";

/**
 * Astro adds these to the images it optimizes itself, but not to the ones
 * referenced by an absolute path, such as the blog GIFs served from public/.
 */
const lazyImagesPlugin = {
  name: "lazy-images",
  element: {
    filter: ["img"],
    visit(node, ctx) {
      if (node.properties.loading === undefined) {
        ctx.setProperty(node, "loading", "lazy");
      }

      if (node.properties.decoding === undefined) {
        ctx.setProperty(node, "decoding", "async");
      }
    },
  },
};

export default defineConfig({
  markdown: {
    processor: satteri({ hastPlugins: [lazyImagesPlugin] }),
    shikiConfig: { theme: "github-dark" },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
