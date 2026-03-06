'use client';

import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function StructuredData() {
	const { language } = useLanguage();

	// Organization Schema - Información empresarial
	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'ZINNIA Code',
		alternateName: 'ZINNIA<Code>',
		url: 'https://zinnia-code.com.ar',
		logo: {
			'@type': 'ImageObject',
			url: 'https://zinnia-code.com.ar/img/logo-solido-chico-remove.webp',
			width: 512,
			height: 512,
		},
		description: language === 'es'
			? 'Empresa de desarrollo de software en San Luis, Argentina. Especialistas en desarrollo web, apps móviles y soluciones digitales a medida para empresas.'
			: 'Software development company in San Luis, Argentina. Specialists in web development, mobile apps, and custom digital solutions for businesses.',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'San Luis',
			addressRegion: 'San Luis',
			addressCountry: 'AR',
		},
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'customer service',
			email: 'info@zinnia-code.com.ar',
			availableLanguage: ['Spanish', 'English'],
		},
		sameAs: [
			'https://github.com/romaricchi',
			'https://linkedin.com/in/romanela-ricchiardi-885284118/',
			'https://github.com/Fermin2049',
			'https://linkedin.com/in/fernandez-fermin-dev',
		],
	};

	// LocalBusiness Schema - SEO Local
	const localBusinessSchema = {
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		name: 'ZINNIA Code',
		image: 'https://zinnia-code.com.ar/img/logo-solido-chico-remove.webp',
		'@id': 'https://zinnia-code.com.ar',
		url: 'https://zinnia-code.com.ar',
		telephone: '+54-266-XXX-XXXX',
		priceRange: '$$',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'San Luis',
			addressLocality: 'San Luis',
			addressRegion: 'San Luis',
			postalCode: '5700',
			addressCountry: 'AR',
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: -33.2750,
			longitude: -66.8328,
		},
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '09:00',
			closes: '18:00',
		},
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: '4.9',
			reviewCount: '15',
		},
	};

	// Service Schema - Servicios ofrecidos
	const serviceSchema = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: language === 'es' ? 'Desarrollo de Software a Medida' : 'Custom Software Development',
		description: language === 'es'
			? 'Servicios completos de desarrollo web, móvil y sistemas empresariales en Argentina'
			: 'Complete web, mobile and enterprise software development services in Argentina',
		provider: {
			'@type': 'Organization',
			name: 'ZINNIA Code',
			url: 'https://zinnia-code.com.ar',
		},
		serviceType: [
			language === 'es' ? 'Desarrollo Web Full Stack' : 'Full Stack Web Development',
			language === 'es' ? 'Desarrollo de Apps Móviles' : 'Mobile App Development',
			language === 'es' ? 'Desarrollo Backend' : 'Backend Development',
			language === 'es' ? 'Consultoría Técnica' : 'Technical Consulting',
		],
		areaServed: {
			'@type': 'Country',
			name: 'Argentina',
		},
	};

	// ItemList Schema - Para aparecer en listados
	const itemListSchema = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				item: {
					'@type': 'Service',
					name: language === 'es' ? 'Desarrollo Web Full Stack' : 'Full Stack Web Development',
					description: language === 'es'
						? 'Desarrollo de aplicaciones web modernas con React, Next.js y TypeScript'
						: 'Modern web application development with React, Next.js, and TypeScript',
				},
			},
			{
				'@type': 'ListItem',
				position: 2,
				item: {
					'@type': 'Service',
					name: language === 'es' ? 'Desarrollo de Apps Móviles' : 'Mobile App Development',
					description: language === 'es'
						? 'Aplicaciones Android y React Native de alto rendimiento'
						: 'High-performance Android and React Native applications',
				},
			},
			{
				'@type': 'ListItem',
				position: 3,
				item: {
					'@type': 'Service',
					name: language === 'es' ? 'Backend y APIs' : 'Backend & APIs',
					description: language === 'es'
						? 'Sistemas backend robustos con .NET Core y Node.js'
						: 'Robust backend systems with .NET Core and Node.js',
				},
			},
			{
				'@type': 'ListItem',
				position: 4,
				item: {
					'@type': 'Service',
					name: language === 'es' ? 'Consultoría Técnica' : 'Technical Consulting',
					description: language === 'es'
						? 'Asesoría experta en arquitectura y desarrollo de software'
						: 'Expert consulting on software architecture and development',
				},
			},
		],
	};

	// FAQ Schema - Para aparecer en rich snippets de preguntas
	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: [
			{
				'@type': 'Question',
				name: language === 'es'
					? '¿Qué servicios de desarrollo ofrece ZINNIA Code?'
					: 'What development services does ZINNIA Code offer?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: language === 'es'
						? 'Ofrecemos desarrollo web full stack con React y Next.js, desarrollo de apps móviles Android y React Native, backend con .NET Core y Node.js, y consultoría técnica para empresas en Argentina.'
						: 'We offer full stack web development with React and Next.js, Android and React Native mobile app development, backend with .NET Core and Node.js, and technical consulting for businesses in Argentina.',
				},
			},
			{
				'@type': 'Question',
				name: language === 'es'
					? '¿En qué zonas trabajan?'
					: 'What areas do you work in?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: language === 'es'
						? 'Trabajamos con clientes de toda Argentina y Latinoamérica, con base en San Luis. Ofrecemos servicios remotos y presenciales según las necesidades del proyecto.'
						: 'We work with clients throughout Argentina and Latin America, based in San Luis. We offer remote and on-site services depending on project needs.',
				},
			},
			{
				'@type': 'Question',
				name: language === 'es'
					? '¿Qué tecnologías utilizan?'
					: 'What technologies do you use?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: language === 'es'
						? 'Utilizamos React, Next.js, TypeScript, Node.js, .NET Core, Android Kotlin, React Native, Tailwind CSS, AWS, y Docker, entre otras tecnologías modernas.'
						: 'We use React, Next.js, TypeScript, Node.js, .NET Core, Android Kotlin, React Native, Tailwind CSS, AWS, and Docker, among other modern technologies.',
				},
			},
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>
		</>
	);
}
