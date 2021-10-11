import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default {
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "partials"),
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        badge: resolve(__dirname, "badge.html"),
      },
    },
  },
};
