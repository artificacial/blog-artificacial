interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Öslar', // Site author
	title: 'Artificacial Blog', // Site title.
	description: 'Where the magic of web design comes to life.', // Description to display in the meta tags
	lang: 'es-SP',
	ogLocale: 'es_SP',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
