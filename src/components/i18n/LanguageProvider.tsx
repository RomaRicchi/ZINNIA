'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Language = 'es' | 'en';

type LanguageContextValue = {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
};

const translations = {
	es: {
		nav: {
			zinnia: 'ZINNIA',
			services: 'Servicios',
			technologies: 'Tecnologías',
			portfolio: 'Portafolio',
			about: 'Sobre nosotros',
			contact: 'Contacto',
		},
		hero: {
			ariaLabel: 'Sección principal',
			logo1Alt: 'Logotipo 1',
			logo2Alt: 'Logotipo 2',
			title: 'Soluciones de TI modernas en Argentina',
			description:
				'Creamos sitios web de alto rendimiento, apps móviles y experiencias digitales. Soluciones de TI a medida para pequeñas y medianas empresas en toda Argentina.',
			cta: 'Solicita una consulta gratuita',
		},
		services: {
			title: 'Nuestros servicios de desarrollo premium',
			subtitle:
				'Hace clic en un servicio para ver soluciones tecnológicas y áreas de enfoque detalladas.',
			detailsLabel: 'Detalles clave',
			items: {
				fullStack: {
					title: 'Desarrollo web full stack (React / Next.js)',
					description:
						'**Desarrollo moderno y de alto rendimiento:** Creamos aplicaciones web completas y escalables. Usamos **Next.js** y **React** para garantizar cargas ultrarrápidas (SSR/SSG), excelente SEO y una experiencia fluida, ideal para dashboards, portales de clientes y plataformas empresariales.',
					details:
						'Especializados en TypeScript, diseño responsive con Tailwind CSS, optimización de velocidad (Core Web Vitals) y arquitectura modular para mantenimiento sencillo.',
				},
				backend: {
					title: 'Backend y desarrollo de APIs (.NET Core / Node.js)',
					description:
						'**Sistemas centrales robustos y seguros:** Diseñamos y construimos la infraestructura que impulsa tu aplicación. Nos enfocamos en APIs RESTful y GraphQL usando **.NET Core** (C#) o **Node.js/Express**, garantizando seguridad, rendimiento y escalabilidad horizontal.',
					details:
						'Implementación de Clean Architecture/DDD, autenticación avanzada (JWT), gestión de bases de datos (SQL Server, PostgreSQL) y pruebas exhaustivas.',
				},
				mobile: {
					title: 'Desarrollo de apps móviles (Android y React Native)',
					description:
						'**Experiencia nativa y multiplataforma:** Desarrollamos apps para Android con **Kotlin/Java** y patrones modernos (MVVM), y también soluciones eficientes multiplataforma con **React Native**. Garantizamos un funcionamiento fluido en todos los dispositivos.',
					details:
						'Integración de pagos (Stripe), soporte offline, notificaciones push y diseño UX optimizado para retención de usuarios.',
				},
				cloud: {
					title: 'Cloud, DevOps y arquitectura técnica',
					description:
						'**Infraestructura como Código (IaC):** Implementamos despliegue, monitoreo y gestión en la nube (principalmente **AWS** o Google Cloud). Creamos pipelines CI/CD automatizados con **Docker** y **Kubernetes** para un ciclo de vida rápido y confiable.',
					details:
						'Configuración de alta disponibilidad, estrategias de backup, reducción de costos cloud y optimización de seguridad.',
				},
				business: {
					title: 'Sistemas empresariales y automatización',
					description:
						'**Eficiencia a través del software:** Transformamos procesos manuales en sistemas automatizados. Creamos software a medida como sistemas de inventario, CRMs internos, reservas y plataformas de analítica.',
					details:
						'Integración con sistemas legacy, desarrollo de módulos de pago personalizados y automatización de reportes y email marketing.',
				},
				consulting: {
					title: 'Consultoría técnica y asesoría de software',
					description:
						'**Orientación tecnológica estratégica:** Ofrecemos consultoría experta para ayudarte a decidir sobre stack, arquitectura y roadmap de desarrollo. Ideal para startups o empresas en transformación digital.',
					details:
						'Auditoría de código, planificación de migraciones, estimación de proyectos y capacitación de equipos técnicos internos.',
				},
			},
		},
		technologies: {
			title: 'Tecnologías que usamos',
			description:
				'Elegimos tecnologías confiables, modernas y seguras para soluciones digitales duraderas.',
		},
		portfolio: {
			title: 'Portafolio',
			description:
				'Una selección de proyectos reales desarrollados con tecnologías modernas y buenas prácticas.',
			projects: {
				businessWebsite: {
					title: 'Sitio web empresarial para cliente argentino',
					description:
						'Sitio empresarial moderno y rápido, enfocado en rendimiento, claridad e identidad de marca en Argentina.',
				},
				propertyApp: {
					title: 'App de visualización 3D de propiedades (offline)',
					description:
						'App React Native para gestionar y mostrar archivos 3D sin conexión, permitiendo visualización inmobiliaria sin internet.',
				},
				realEstate: {
					title: 'Plataforma de gestión inmobiliaria',
					description:
						'Plataforma completa para gestionar propiedades, contratos, inquilinos y pagos, con arquitectura limpia y autenticación segura.',
				},
				reservation: {
					title: 'Sistema de reservas y pagos (Web API)',
					description:
						'API escalable de reservas y pagos con ASP.NET Core, autenticación JWT y optimizaciones de base de datos.',
				},
				enterprise: {
					title: 'Suite de gestión empresarial (roles)',
					description:
						'Solución empresarial modular con roles seguros, flujos clínicos y componentes, desarrollada con Node.js y MySQL.',
				},
				customWebsite: {
					title: 'Sitio web empresarial a medida (arquitectura modular)',
					description:
						'Sitio empresarial con Express.js, HTML y CSS modular, enfocado en flexibilidad y mantenibilidad.',
				},
			},
		},
		about: {
			title: 'Sobre nosotros',
			description:
				'ZINNIA Code es una empresa de desarrollo de software creada en colaboración por dos desarrolladores de la ciudad de San Luis, Argentina, formados en la Universidad de La Punta (ULP). Nacemos con el objetivo de diseñar soluciones digitales sólidas, escalables y alineadas a las necesidades reales de cada negocio.\n\nNos especializamos en el desarrollo de aplicaciones web modernas, sistemas backend robustos y soluciones a medida, combinando buenas prácticas, arquitectura limpia y foco en la calidad del producto final. Creemos en la tecnología como una herramienta estratégica para optimizar procesos, mejorar la eficiencia y acompañar el crecimiento de las empresas.',
			teamTitle: 'Nuestro equipo',
			teamDescription:
				'Somos un equipo técnico que trabaja de forma cercana con cada cliente, priorizando la comunicación clara, la responsabilidad y las entregas bien construidas. Cada proyecto es abordado con una visión integral: entender el problema, proponer la mejor solución y construir software confiable que pueda evolucionar en el tiempo.',
			roles: {
				fullStackCoFounder: 'Desarrollador Full Stack y Co-Founder',
			},
			team: {
				fermin: {
					bio:
						'Especialista backend en .NET, Node.js y arquitecturas escalables. Enfocado en sistemas de alto rendimiento y automatización empresarial.',
				},
				romanela: {
					bio:
						'Responsable de comunicación con clientes y de asegurar entregas de alta calidad para empresas que quieren crecer su presencia digital.',
				},
			},
		},
		contact: {
			title: '¿Listo para empezar tu próximo proyecto?',
			description:
				'Ya sea que necesites un sitio web, una app móvil o una solución digital completa, podemos ayudarte a convertir tus ideas en realidad con soluciones de TI a medida en Argentina.',
			cta: 'Contáctanos',
		},
		zinniaInfo: {
			title: 'ZINNIA',
			brand: 'ZINNIA <Code>',
			description:
				'Somos una empresa de desarrollo de software con base en Argentina. Diseñamos y construimos soluciones digitales a medida que ayudan a las empresas a optimizar procesos, escalar su negocio y generar valor real. Desarrollamos aplicaciones web, móviles y sistemas empresariales con foco en calidad, seguridad y mantenibilidad.',
			featuresTitle: 'Por qué elegirnos',
			features: {
				feature1: 'Soluciones 100% personalizadas, alineadas a los objetivos reales de cada negocio',
				feature2: 'Arquitecturas modernas, escalables y preparadas para crecer junto a tu empresa',
				feature3: 'Experiencia sólida en backend, full-stack y sistemas críticos orientados a rendimiento',
				feature4: 'Comunicación clara, procesos transparentes y entregas responsables',
			},
			missionTitle: 'Nuestra misión',
			missionText:
				'Impulsar el crecimiento digital de empresas mediante soluciones tecnológicas confiables, eficientes y bien diseñadas. Trabajamos de forma cercana con cada cliente para entender su negocio y desarrollar productos que resuelvan problemas reales, aporten valor y puedan evolucionar en el tiempo.',
		},
		footer: {
			description:
				'Empresa de desarrollo IT en Argentina. Creamos soluciones digitales modernas, rápidas y seguras.',
			quickLinks: 'Enlaces rápidos',
			connect: 'Conéctate',
			rights: 'Todos los derechos reservados.',
		},
	},
	en: {
		nav: {
			zinnia: 'ZINNIA',
			services: 'Services',
			technologies: 'Technologies',
			portfolio: 'Portfolio',
			about: 'About Us',
			contact: 'Contact',
		},
		hero: {
			ariaLabel: 'Hero section',
			logo1Alt: 'Logo 1',
			logo2Alt: 'Logo 2',
			title: 'Modern IT solutions in Argentina',
			description:
				'We build high-performance websites, mobile apps and digital experiences. Custom IT solutions for small and medium businesses across Argentina.',
			cta: 'Get a free consultation',
		},
		services: {
			title: 'Our premium development services',
			subtitle:
				'Click on a service below to see key technological solutions and detailed focus areas.',
			detailsLabel: 'Key details',
			items: {
				fullStack: {
					title: 'Full-stack web development (React / Next.js)',
					description:
						'**Modern, high-performance development:** We create complete and scalable web applications. We use **Next.js** and **React** to ensure ultra-fast loading times (SSR/SSG), excellent SEO, and a fluid user experience, ideal for complex dashboards, client portals, and business platforms.',
					details:
						'Specializing in TypeScript, responsive design with Tailwind CSS, speed optimization (Core Web Vitals), and modular architecture for easy maintenance.',
				},
				backend: {
					title: 'Backend & API development (.NET Core / Node.js)',
					description:
						'**Robust and secure core systems:** We design and build the infrastructure that powers your application. We focus on RESTful and GraphQL APIs using **.NET Core** (C#) or **Node.js/Express**, guaranteeing security, performance, and horizontal scalability.',
					details:
						'Clean Architecture/DDD implementation, advanced authentication (JWT), database management (SQL Server, PostgreSQL), and exhaustive testing.',
				},
				mobile: {
					title: 'Mobile app development (Android & React Native)',
					description:
						'**Native and cross-platform experience:** We develop mobile applications for Android using **Kotlin/Java** with modern patterns (MVVM), and also build efficient cross-platform solutions with **React Native**. We ensure your app runs smoothly on all devices.',
					details:
						'Payment integration (Stripe), offline support, push notifications, and UX design optimized for user retention.',
				},
				cloud: {
					title: 'Cloud, DevOps & technical architecture',
					description:
						'**Infrastructure as code (IaC):** We provide cloud deployment, monitoring, and management solutions (primarily **AWS** or Google Cloud). We create automated CI/CD pipelines using **Docker** and **Kubernetes** to ensure a fast and reliable software lifecycle.',
					details:
						'High-availability environment configuration, backup strategies, cloud cost reduction, and infrastructure security optimization.',
				},
				business: {
					title: 'Business systems & workflow automation',
					description:
						'**Efficiency through software:** We transform manual processes into automated systems. We build custom software, such as inventory management systems, internal CRMs, booking systems, and analytics platforms.',
					details:
						'Integration with existing (legacy) systems, development of personalized payment modules, and automation of reports and email marketing.',
				},
				consulting: {
					title: 'Technical consulting & software advisory',
					description:
						'**Strategic technology guidance:** We offer expert consulting to help you make informed decisions about your technology stack, architecture, and development roadmap. Ideal for startups or companies undergoing digital transformation.',
					details:
						'Code auditing, migration planning, project estimation, and internal technical team training.',
				},
			},
		},
		technologies: {
			title: 'Technologies we use',
			description:
				'We choose reliable, modern and secure technologies to deliver long-lasting digital solutions.',
		},
		portfolio: {
			title: 'Portfolio',
			description:
				'A selection of real-world projects built using modern technologies and best development practices.',
			projects: {
				businessWebsite: {
					title: 'Business website for an Argentine client',
					description:
						'A modern, fast-loading business website built for an Argentine client, focused on performance, clarity and brand identity.',
				},
				propertyApp: {
					title: '3D property visualization app (offline processing)',
					description:
						'A React Native mobile application designed to manage and display 3D property files offline, enabling real estate visualization without internet access.',
				},
				realEstate: {
					title: 'Real estate management platform',
					description:
						'A complete platform for managing properties, contracts, tenants and payments, built with clean architecture and secure authentication.',
				},
				reservation: {
					title: 'Reservation & payment system (Web API)',
					description:
						'A scalable reservation and payment API designed with ASP.NET Core, secure JWT authentication and database optimizations.',
				},
				enterprise: {
					title: 'Enterprise management suite (role-based access)',
					description:
						'A multi-module enterprise solution with secure roles, clinical workflows and modular components, developed using Node.js and MySQL.',
				},
				customWebsite: {
					title: 'Custom business website (modular architecture)',
					description:
						'A custom business website built with Express.js, HTML, CSS and modular components, focused on flexibility and maintainability.',
				},
			},
		},
		about: {
			title: 'About us',
			description:
				'ZINNIA Code is a software development company created in collaboration by two developers from the city of San Luis, Argentina, trained at the University of La Punta (ULP). We were born with the goal of designing solid, scalable digital solutions aligned with the real needs of each business.\n\nWe specialize in developing modern web applications, robust backend systems, and custom solutions, combining best practices, clean architecture, and a focus on the quality of the final product. We believe in technology as a strategic tool to optimize processes, improve efficiency, and support business growth.',
			teamTitle: 'Our team',
			teamDescription:
				'We are a technical team that works closely with each client, prioritizing clear communication, responsibility, and well-built deliveries. Each project is approached with a comprehensive vision: understand the problem, propose the best solution, and build reliable software that can evolve over time.',
			roles: {
				fullStackCoFounder: 'Full Stack Developer & Co-Founder',
			},
			team: {
				fermin: {
					bio:
						'Backend specialist in .NET, Node.js and scalable architectures. Focused on high-performance systems and business automation.',
				},
				romanela: {
					bio:
						'Responsible for client communication and ensuring high-quality delivery for businesses looking to grow their digital presence.',
				},
			},
		},
		contact: {
			title: 'Ready to start your next project?',
			description:
				'Whether you need a website, mobile app or a complete digital solution, we can help bring your ideas to life with custom IT solutions for businesses in Argentina.',
			cta: 'Get in touch',
		},
		zinniaInfo: {
			title: 'ZINNIA',
			brand: 'ZINNIA <Code>',
			description:
				'We are a software development company based in Argentina. We design and build tailor-made digital solutions that help businesses optimize processes, scale, and create real value. We develop web applications, mobile apps, and enterprise systems with a focus on quality, security, and maintainability.',
			featuresTitle: 'Why choose us',
			features: {
				feature1: '100% custom solutions aligned to each business\' real goals',
				feature2: 'Modern, scalable architectures ready to grow with your company',
				feature3: 'Solid experience in backend, full-stack, and performance-oriented critical systems',
				feature4: 'Clear communication, transparent processes, and responsible deliveries',
			},
			missionTitle: 'Our mission',
			missionText:
				'To drive companies\' digital growth through reliable, efficient, and well-designed technology solutions. We work closely with every client to understand their business and deliver products that solve real problems, add value, and can evolve over time.',
		},
		footer: {
			description:
				'An IT development company based in Argentina. We build modern, fast and secure digital solutions.',
			quickLinks: 'Quick Links',
			connect: 'Connect',
			rights: 'All rights reserved.',
		},
	},
} as const;

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const defaultLanguage: Language = 'es';
const storageKey = 'language';

function getTranslation(language: Language, key: string) {
	const parts = key.split('.');
	let current: unknown = translations[language];

	for (const part of parts) {
		if (current && typeof current === 'object' && part in current) {
			current = (current as Record<string, unknown>)[part];
		} else {
			return key;
		}
	}

	return typeof current === 'string' ? current : key;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [language, setLanguage] = useState<Language>(() => {
		if (typeof window === 'undefined') return defaultLanguage;
		const stored = localStorage.getItem(storageKey);
		return stored === 'es' || stored === 'en' ? stored : defaultLanguage;
	});

	useEffect(() => {
		if (typeof window === 'undefined') return;
		localStorage.setItem(storageKey, language);
		document.documentElement.lang = language;
	}, [language]);

	const value = useMemo<LanguageContextValue>(
		() => ({
			language,
			setLanguage,
			t: (key: string) => getTranslation(language, key),
		}),
		[language]
	);

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useLanguage must be used within LanguageProvider');
	}
	return context;
}
