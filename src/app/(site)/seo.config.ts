type Language = 'es' | 'en';

type SeoConfig = {
	title: string;
	description: string;
	keywords: string[];
	openGraph: {
		title: string;
		description: string;
		url: string;
		siteName: string;
		locale: string;
		type: string;
	};
	twitter: {
		card: string;
		title: string;
		description: string;
	};
	canonical: string;
};

const seoByLang: Record<Language, SeoConfig> = {
	es: {
		title: 'ZINNIA<code> — Soluciones de TI modernas en Argentina',
		description:
			'Creamos sitios web de alto rendimiento, apps móviles y experiencias digitales. Soluciones de TI a medida para pymes en Argentina.',
		keywords: [
			'desarrollo web argentina',
			'soluciones it argentina',
			'diseño de sitios web argentina',
			'desarrollador react argentina',
			'agencia nextjs',
			'apps móviles argentina',
			'automatización de negocios',
			'transformación digital',
		],
		openGraph: {
			title: 'ZINNIA<code> — Soluciones de TI modernas en Argentina',
			description:
				'Sitios, apps y soluciones digitales de alto rendimiento para empresas argentinas.',
			url: 'https://zinnia-code.com.ar',
			siteName: 'ZINNIA<code>',
			locale: 'es_AR',
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title: 'ZINNIA<code> — Soluciones de TI modernas en Argentina',
			description:
				'Sitios web, aplicaciones y soluciones digitales para empresas en Argentina.',
		},
		canonical: 'https://zinnia-code.com.ar',
	},
	en: {
		title: 'ZINNIA<code> — Modern IT solutions in Argentina',
		description:
			'We build high-performance websites, mobile apps and digital experiences. Custom IT solutions for small and medium businesses across Argentina.',
		keywords: [
			'web development argentina',
			'argentina it solutions',
			'website design argentina',
			'react developer argentina',
			'nextjs agency',
			'mobile apps argentina',
			'business automation',
			'digital transformation',
		],
		openGraph: {
			title: 'ZINNIA<code> — Modern IT solutions in Argentina',
			description:
				'High-performance websites, apps and digital solutions for Argentine businesses.',
			url: 'https://zinnia-code.com.ar',
			siteName: 'ZINNIA<code>',
			locale: 'en_AR',
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title: 'ZINNIA<code> — Modern IT solutions in Argentina',
			description:
				'Websites, applications and digital solutions for businesses in Argentina.',
		},
		canonical: 'https://zinnia-code.com.ar',
	},
};

export function getSeo(lang: Language = 'es') {
	return seoByLang[lang] ?? seoByLang.es;
}

export const seo = getSeo('es');

export default seo;
