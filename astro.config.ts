import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  markdown: {
    shikiConfig: { theme: "github-dark" },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
