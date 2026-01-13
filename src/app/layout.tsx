import './globals.css';
import localFont from 'next/font/local';
import type { Metadata } from 'next';
import { LanguageProvider } from '@/components/i18n/LanguageProvider';
import { seo } from './(site)/seo.config';
import StructuredData from '@/components/StructuredData';

const sofiaPro = localFont({
	src: [
		{
			path: '../fonts/SofiaPro/Sofia-Pro-Light.otf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../fonts/SofiaPro/Sofia-Pro-Regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../fonts/SofiaPro/Sofia-Pro-Bold.otf',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-sofia',
});

export const metadata: Metadata = {
	title: seo.title,
	description: seo.description,
	keywords: seo.keywords,
	viewport: 'width=device-width, initial-scale=1',
	icons: {
		icon: '/img/logo-solido-chico-remove.png',
		apple: '/img/logo-solido-chico-remove.png',
		shortcut: '/img/logo-solido-chico-remove.png',
	},
	openGraph: {
		title: seo.openGraph.title,
		description: seo.openGraph.description,
		url: seo.openGraph.url,
		siteName: seo.openGraph.siteName,
		locale: seo.openGraph.locale,
		type: seo.openGraph.type as 'website',
		images: [
			{
				url: '/img/logo-solido-chico-remove.png',
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: seo.twitter.card as 'summary_large_image',
		title: seo.twitter.title,
		description: seo.twitter.description,
	},
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: seo.canonical,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es" className="h-full">
			<body
				className={`${sofiaPro.variable} min-h-screen h-full m-0 bg-black text-white`}
			>
				<StructuredData />
				<LanguageProvider>{children}</LanguageProvider>
			</body>
		</html>
	);
}
