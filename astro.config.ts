import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import tidewave from "tidewave/vite-plugin";

export default defineConfig({
  markdown: {
    shikiConfig: { theme: "github-dark" },
  },
  vite: {
    plugins: [tidewave(), tailwindcss()],
  },
});
