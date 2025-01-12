import {z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string(),

    //relation
    tags: z.array(z.string()),
  })
})

export const collections = {
  blog: blogCollection
}
