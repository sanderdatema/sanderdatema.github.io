import { defineCollection } from "astro:content"
import { z, defineCollection } from "astro:content"

const postCollection = defineCollection({
    schema: z.object({
        isDraft: z.boolean(),
        title: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        author: z.string().default("Anonymous"),
    }),
})

export const collections = {
    posts: postCollection,
}
