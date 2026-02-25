// Blog content is now object-based in src/data/posts.ts
// The blog collection is kept for compatibility but has no entries.
import { defineCollection, z } from 'astro:content'
import { CATEGORIES } from '@/data/categories'

const blog = defineCollection({
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.union([z.string(), z.date()]),
			heroImage: z.string(),
			category: z.enum(CATEGORIES),
			tags: z.array(z.string()),
			draft: z.boolean().optional()
		})
})

export const collections = { blog }
