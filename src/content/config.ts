import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string().optional(),

    imageUrl: z.string().optional(),
    imageAlt: z.string().optional(),

    // Transform string to Date object
    pubDate: z.coerce.date(),

    cardType: z.string().optional(),
    cardSize: z.string().optional(),
  }),
});

export const collections = { blog };
