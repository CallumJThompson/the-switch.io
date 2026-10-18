import { defineCollection, z } from 'astro:content';

const switchesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    idNumber: z.string(), // e.g. "028"
    name: z.string(),     // e.g. "Falcon"
    maker: z.string(),    // e.g. "Durock"
    type: z.enum(['Linear', 'Tactile', 'Clicky']),
    actuationForce: z.number(),
    bottomOutForce: z.number(),
    preTravel: z.number(),
    totalTravel: z.number(),
    topHousing: z.string(),
    bottomHousing: z.string(),
    stem: z.string(),
    factoryLubed: z.string(),
    featured: z.boolean().default(false),
    // Optional array of [displacement, force] points from your testing rig
    forceCurvePoints: z.array(z.tuple([z.number(), z.number()])).optional(),
  }),
});

const journalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    num: z.string(), // e.g. "01"
    category: z.enum(['REVIEW', 'LAB NOTES', 'GUIDE']),
    date: z.string(), // e.g. "12 JUN 2026"
    title: z.string(),
    excerpt: z.string(),
    readTime: z.string(),
    tags: z.array(z.string()),
    specHighlight: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  switches: switchesCollection,
  journal: journalCollection,
};
