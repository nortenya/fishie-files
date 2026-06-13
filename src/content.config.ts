import { defineCollection, z } from 'astro:content';

const entrada = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    mood: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

export const collections = {
  analisis: entrada,
  lore: entrada,
  teorias: entrada,
  timeline: entrada
};
