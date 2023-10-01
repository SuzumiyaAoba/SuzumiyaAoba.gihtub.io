import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    created_at: z.date(),
    draft: z.boolean(),
  }),
});

export const collections = {
  blog: blogCollection,
};
