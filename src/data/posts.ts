import { CATEGORIES } from '@/data/categories'
import readingTime from 'reading-time'

export type Category = (typeof CATEGORIES)[number]

export type BlogPostData = {
	title: string
	description: string
	pubDate: Date
	heroImage: string
	category: Category
	tags: string[]
	draft: boolean
}

export type BlogPostEntry = {
	id: string
	slug: string
	data: BlogPostData
	body: string
	readTime: string
}

const BLOG_POSTS: Omit<BlogPostEntry, 'readTime'>[] = [
	{
		id: 'welcome',
		slug: 'welcome',
		data: {
			title: 'Welcome to the Blog',
			description: 'A short introduction and welcome message for readers.',
			pubDate: new Date('2026-02-01'),
			heroImage:
				'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop',
			category: 'Category 1',
			tags: ['welcome', 'intro'],
			draft: false
		},
		body: `This is a **dummy blog post** to get you started.

You can edit posts in \`src/data/posts.ts\` as objects. Add more entries to the \`BLOG_POSTS\` array — the \`slug\` becomes the URL path.

## Getting started

- Edit the post objects (title, description, pubDate, etc.) in \`src/data/posts.ts\`.
- Use the \`body\` field for Markdown content.
- Categories must exist in \`src/data/categories.ts\`.

That's it. Happy writing!`
	},
	{
		id: 'second-post',
		slug: 'second-post',
		data: {
			title: 'Second Post',
			description: 'Another sample post with placeholder content.',
			pubDate: new Date('2026-02-03'),
			heroImage:
				'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600&h=400&fit=crop',
			category: 'Category 2',
			tags: ['sample', 'demo'],
			draft: false
		},
		body: `Here is another **dummy article**.

You can replace this with real content. The blog uses object-based data from \`src/data/posts.ts\`.

## Tips

- Set \`draft: true\` to hide a post from the listing.
- \`heroImage\` is a path to an image in the \`public/\` folder.`
	},
	{
		id: 'third-post',
		slug: 'third-post',
		data: {
			title: 'Third Post',
			description: 'A third dummy post for testing pagination and layout.',
			pubDate: new Date('2026-02-06'),
			heroImage:
				'https://images.unsplash.com/photo-1455390692773-6737d0c43e1d?w=600&h=400&fit=crop',
			category: 'Category 3',
			tags: ['example', 'test'],
			draft: false
		},
		body: `Third **dummy post** in the set.

This keeps the same structure as the others so you can see how the blog behaves with a few entries. Replace these with your own articles when you're ready.

## Summary

- Blog content lives in \`src/data/posts.ts\` as an array of objects.
- Run \`pnpm dev\` to start the Astro dev server.
- Build with \`pnpm build\` when you're ready to deploy.`
	},
	{
		id: 'local-elections',
		slug: 'local-elections',
		data: {
			title: 'Local elections see record turnout',
			description:
				'Voters turned out in large numbers for this year’s council and mayoral races across the region.',
			pubDate: new Date('2026-02-08'),
			heroImage:
				'https://images.unsplash.com/photo-1540914124281-64658dd1508b?w=600&h=400&fit=crop',
			category: 'Category 1',
			tags: ['politics', 'local', 'elections'],
			draft: false
		},
		body: `Record numbers turned out for the local elections this spring.

## Results

Preliminary counts suggest a clear shift in several key wards. Full results will be announced by the end of the week.`
	},
	{
		id: 'new-library-opens',
		slug: 'new-library-opens',
		data: {
			title: 'New central library opens its doors',
			description:
				'The long-awaited central library has opened with extended hours and a dedicated children’s wing.',
			pubDate: new Date('2026-02-10'),
			heroImage:
				'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
			category: 'Category 2',
			tags: ['culture', 'community', 'books'],
			draft: false
		},
		body: `The new central library welcomed its first visitors this morning.

## Features

- Extended opening hours
- Dedicated children’s wing
- Free Wi‑Fi and study spaces`
	},
	{
		id: 'sports-roundup',
		slug: 'sports-roundup',
		data: {
			title: 'Weekend sports roundup: wins for United and City',
			description:
				'A busy weekend of fixtures saw both United and City secure important victories.',
			pubDate: new Date('2026-02-12'),
			heroImage:
				'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
			category: 'Category 3',
			tags: ['sports', 'football', 'weekend'],
			draft: false
		},
		body: `United and City both won their weekend fixtures.

## Match reports

Full reports and reaction from managers in tomorrow’s edition.`
	},
	{
		id: 'weather-warning',
		slug: 'weather-warning',
		data: {
			title: 'Weather warning issued for coastal areas',
			description:
				'Strong winds and high tides are forecast for the next 48 hours. Travel advice has been updated.',
			pubDate: new Date('2026-02-15'),
			heroImage:
				'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop',
			category: 'Category 4',
			tags: ['weather', 'safety', 'travel'],
			draft: false
		},
		body: `A yellow weather warning is in place for coastal areas.

## Advice

- Avoid unnecessary travel
- Check ferry and rail updates before setting off`
	},
	{
		id: 'business-brief',
		slug: 'business-brief',
		data: {
			title: 'Business brief: markets steady as rates hold',
			description:
				'Markets held steady after the central bank left interest rates unchanged. Analysts expect a quiet week.',
			pubDate: new Date('2026-02-18'),
			heroImage:
				'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
			category: 'Category 5',
			tags: ['business', 'markets', 'economy'],
			draft: false
		},
		body: `Rates were left unchanged at this month’s meeting.

## Outlook

Most analysts expect no change until the summer.`
	},
	{
		id: 'arts-festival',
		slug: 'arts-festival',
		data: {
			title: 'Arts festival programme announced',
			description:
				'This year’s arts festival will feature over 50 events, from theatre to street performance.',
			pubDate: new Date('2026-02-20'),
			heroImage:
				'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop',
			category: 'Category 1',
			tags: ['arts', 'festival', 'culture'],
			draft: false
		},
		body: `The full programme for the summer arts festival has been released.

## Highlights

- Open-air theatre
- Street performance
- Family workshops`
	},
	{
		id: 'education-report',
		slug: 'education-report',
		data: {
			title: 'Education report calls for more support in schools',
			description:
				'A new report highlights the need for extra funding and staff in primary and secondary schools.',
			pubDate: new Date('2026-02-25'),
			heroImage:
				'https://images.unsplash.com/photo-1523050854058-8dfc10c5a7b1?w=600&h=400&fit=crop',
			category: 'Category 2',
			tags: ['education', 'schools', 'policy'],
			draft: false
		},
		body: `The report was commissioned last year and published today.

## Key findings

- Staffing shortages in key subjects
- Call for increased per-pupil funding`
	}
]

function withReadTime(post: Omit<BlogPostEntry, 'readTime'>): BlogPostEntry {
	const { text } = readingTime(post.body)
	return { ...post, readTime: text }
}

const allPosts: BlogPostEntry[] = BLOG_POSTS.map(withReadTime)

export function getPosts(max?: number): BlogPostEntry[] {
	return allPosts
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.slice(0, max)
}

export function getPostBySlug(slug: string): BlogPostEntry | undefined {
	return allPosts.find((p) => p.slug === slug && !p.data.draft)
}

export function getCategories(): Category[] {
	const categories = new Set(allPosts.filter((p) => !p.data.draft).map((p) => p.data.category))
	return Array.from(categories).sort((a, b) =>
		CATEGORIES.indexOf(a) < CATEGORIES.indexOf(b) ? -1 : 1
	)
}

export function getTags(): string[] {
	const tags = new Set<string>()
	allPosts
		.filter((p) => !p.data.draft)
		.forEach((p) => {
			p.data.tags.forEach((tag) => {
				if (tag !== '') tags.add(tag.toLowerCase())
			})
		})
	return Array.from(tags)
}

export function getPostByTag(tag: string): BlogPostEntry[] {
	const lower = tag.toLowerCase()
	return getPosts().filter((p) => p.data.tags.some((t) => t.toLowerCase() === lower))
}

export function filterPostsByCategory(category: string): BlogPostEntry[] {
	return getPosts().filter((p) => p.data.category.toLowerCase() === category.toLowerCase())
}
