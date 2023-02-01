import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
import glob from "glob";

const root = resolve(__dirname, "src");

// TODO: remove once https://github.com/alexlafroscia/vite-plugin-handlebars/issues/192 is resolved
function handlebarsOverride(options) {
  const plugin = handlebars(options);
  // Currently handleHotUpdate skips further processing, which bypasses
  // postcss and in turn tailwind doesn't pick up file changes
  delete plugin.handleHotUpdate;
  return plugin;
}

export default {
  root,
  plugins: [
    handlebarsOverride({
      partialDirectory: resolve(root, "partials"),
    }),
  ],
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      // Generate an input entry for every page
      input: Object.fromEntries(
        glob
          .sync("**/*.html", { cwd: root, ignore: ["partials/**"] })
          .filter((filename) => filename.endsWith(".html"))
          .map((filename) => {
            const key = filename.replace(/\.html$/, "");
            const path = resolve(root, filename);
            return [key, path];
          })
      ),
    },
  },
};
