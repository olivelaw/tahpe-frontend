import rss from '@astrojs/rss'
import { getPosts } from '@/utils'
import { siteConfig } from '@/site-config'

export async function GET(context: any) {
	const posts = await getPosts()
	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `post/${post.slug}/`,
			pubDate: post.data.pubDate
		}))
	})
}
