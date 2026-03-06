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
		images: {
			url: string;
			width: number;
			height: number;
			alt: string;
		}[];
	};
	twitter: {
		card: string;
		title: string;
		description: string;
		images: {
			url: string;
			alt: string;
		}[];
	};
	canonical: string;
};

const seoByLang: Record<Language, SeoConfig> = {
	es: {
		title: 'ZINNIA<Code> — Desarrollo de Software y Código en San Luis, Argentina',
		description:
			'ZINNIA es una agencia de programación y desarrollo de código en San Luis, Argentina. Equipo formado en la Universidad de La Punta. Especialistas en soluciones tecnológicas para negocios, desarrollo web full stack, apps móviles, backend y consultoría TI. Creamos programas para gimnasios y empresas a medida.',
		keywords: [
			'zinnia',
			'codigo',
			'programacion',
			'universidad de la punta',
			'soluciones tecnologicas para negocios',
			'programa para gimnasios',
			'desarrollo web San Luis',
			'desarrollo software Argentina',
			'agencia software San Luis',
			'desarrollador React Argentina',
			'apps móviles Argentina',
			'desarrollo Next.js',
			'consultoría TI San Luis',
			'desarrollo full stack Argentina',
			'desarrollo web para empresas',
			'software a medida Argentina',
			'desarrollador Node.js',
			'desarlo aplicaciones Android',
			'automatización empresarial',
			'transformación digital Argentina',
			'tecnologías',
			'servicios tecnológicos',
			'soluciones tecnológicas',
			'aplicaciones web y móviles',
			'crecimiento digital',
			'sistemas empresariales',
		],
		openGraph: {
			title: 'ZINNIA<Code> — Desarrollo de Software y Código en San Luis, Argentina',
			description:
			'ZINNIA es un equipo de programación y desarrollo de código formado en la Universidad de La Punta. Especialistas en soluciones tecnológicas para negocios, desarrollo web, apps móviles y programas para gimnasios y empresas.',
			url: 'https://zinnia-code.com.ar',
			siteName: 'ZINNIA<Code>',
			locale: 'es_AR',
			type: 'website',
			images: [
				{
					url: 'https://zinnia-code.com.ar/img/logo-solido-chico-remove.png',
					width: 1200,
					height: 630,
					alt: 'ZINNIA Code - Desarrollo de Software en Argentina',
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: 'ZINNIA<Code> — Desarrollo de Software y Código en San Luis, Argentina',
			description:
			'ZINNIA: Agencia de programación y desarrollo de código en San Luis. Equipo de la Universidad de La Punta. Creamos soluciones tecnológicas para negocios, programas para gimnasios y desarrollo web a medida.',
			images: [
				{
					url: 'https://zinnia-code.com.ar/img/logo-solido-chico-remove.png',
					alt: 'ZINNIA Code - Desarrollo de Software',
				},
			],
		},
		canonical: 'https://zinnia-code.com.ar',
	},
	en: {
		title: 'ZINNIA<Code> — Software & Code Development in San Luis, Argentina',
		description:
			'ZINNIA is a programming and code development agency in San Luis, Argentina. Team formed at University of La Punta (ULP). Specialists in technological solutions for business, full stack web development, mobile apps, backend, and IT consulting. We create gym software and custom business programs.',
		keywords: [
			'zinnia',
			'code',
			'programming',
			'University of La Punta',
			'technological solutions for business',
			'gym software',
			'web development San Luis',
			'software development Argentina',
			'software agency San Luis',
			'React developer Argentina',
			'mobile apps Argentina',
			'Next.js development',
			'IT consulting San Luis',
			'full stack development Argentina',
			'web development for business',
			'custom software Argentina',
			'Node.js developer',
			'Android app development',
			'business automation',
			'digital transformation Argentina',
			'technologies',
			'technology services',
			'technology solutions',
			'web and mobile applications',
			'digital growth',
			'enterprise systems',
		],
		openGraph: {
			title: 'ZINNIA<Code> — Web & Software Development in San Luis, Argentina',
			description:
				'Expert team in web development, mobile apps, and digital solutions. We work with companies across Argentina on digital transformation projects.',
			url: 'https://zinnia-code.com.ar',
			siteName: 'ZINNIA<Code>',
			locale: 'en_AR',
			type: 'website',
			images: [
				{
					url: 'https://zinnia-code.com.ar/img/logo-solido-chico-remove.png',
					width: 1200,
					height: 630,
					alt: 'ZINNIA Code - Software Development in Argentina',
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: 'ZINNIA<Code> — Web & Software Development in San Luis, Argentina',
			description:
				'We develop websites, mobile apps, and digital solutions for businesses in Argentina. Experts in React, Next.js, and full stack development.',
			images: [
				{
					url: 'https://zinnia-code.com.ar/img/logo-solido-chico-remove.png',
					alt: 'ZINNIA Code - Software Development',
				},
			],
		},
		canonical: 'https://zinnia-code.com.ar',
	},
};

export function getSeo(lang: Language = 'es') {
	return seoByLang[lang] ?? seoByLang.es;
}

export const seo = getSeo('es');

export default seo;
