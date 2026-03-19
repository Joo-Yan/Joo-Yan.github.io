import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    demo: z.string().optional(),
    repo: z.string().optional(),
    wip: z.boolean().default(false),
    period: z.string().optional(),
    featuredOnHome: z.boolean().default(false),
    homeDescription: z.string().optional(),
    order: z.number().default(99),
    source_hash: z.string().optional(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/about' }),
  schema: z.object({
    source_hash: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    source_hash: z.string().optional(),
  }),
});

export const collections = { projects, about, blog };
