import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://zinnia-code.com.ar';
	const lastModified = new Date();

	// Páginas principales del sitio con prioridades SEO
	const routes = [
		{
			url: baseUrl,
			lastModified,
			changeFrequency: 'weekly' as const,
			priority: 1,
		},
		{
			url: `${baseUrl}/#zinnia`,
			lastModified,
			changeFrequency: 'monthly' as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/#services`,
			lastModified,
			changeFrequency: 'weekly' as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/#technologies`,
			lastModified,
			changeFrequency: 'monthly' as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/#about`,
			lastModified,
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/#contact`,
			lastModified,
			changeFrequency: 'monthly' as const,
			priority: 0.8,
		},
	];

	return [...routes];
}
