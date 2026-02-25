import {
	getCategories as getCategoriesFromPosts,
	getPosts as getPostsFromData,
	getPostBySlug as getPostBySlugFromData,
	getTags as getTagsFromPosts,
	getPostByTag as getPostByTagFromData,
	filterPostsByCategory as filterPostsByCategoryFromData,
	type BlogPostEntry
} from '@/data/posts'

export type { BlogPostEntry }

export const getCategories = async () => getCategoriesFromPosts()

export const getPostBySlug = (slug: string) => getPostBySlugFromData(slug)

export const getPosts = async (max?: number): Promise<BlogPostEntry[]> => getPostsFromData(max)

export const getTags = async () => getTagsFromPosts()

export const getPostByTag = async (tag: string) => getPostByTagFromData(tag)

export const filterPostsByCategory = async (category: string) =>
	filterPostsByCategoryFromData(category)
