import { resolve } from "path";
import { readdirSync } from "fs";
import handlebars from "vite-plugin-handlebars";

const root = resolve(__dirname, "src");

export default {
  root,
  plugins: [
    handlebars({
      partialDirectory: resolve(root, "partials"),
    }),
  ],
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      // Generate an input entry for every page
      input: Object.fromEntries(
        readdirSync(root)
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
