import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogCollection = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
  })
})

const noteCollection = defineCollection({
  loader: glob({ base: './src/content/note', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
  })
})

const projectsCollection = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string(),
    url: z.string().optional(),
    tags: z.array(z.string()).optional(),
  })
})

export const collections = {
  blog: blogCollection,
  note: noteCollection,
  projects: projectsCollection,
}
