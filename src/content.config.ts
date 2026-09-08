import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    base: "./src/blog",
    pattern: "**/*.md",
    // Posts live at {year}/{month}-{day}-{slug}.md, the id is the slug
    generateId: ({ entry }) =>
      entry.replace(/^\d{4}\/\d{2}-\d{2}-/, "").replace(/\.md$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
