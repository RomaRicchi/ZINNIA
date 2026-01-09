'use client';

import StarBorder from '@/components/ui/StarBorder';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function Header() {
	const { language, setLanguage, t } = useLanguage();

	return (
		<header className="fixed top-0 left-0 w-full z-[9999] bg-black/40 backdrop-blur-xl">
			<nav className="max-w-6xl mx-auto px-6 py-5 flex items-center">
				<div className="flex-1" />
				{/* Menu */}
				<div className="flex gap-6 text-sm justify-center flex-1">
					<StarBorder
						as="a"
						href="#services"
						color="cyan"
						speed="3s"
						className="text-white"
					>
						{t('nav.services')}
					</StarBorder>
					<StarBorder
						as="a"
						href="#technologies"
						color="cyan"
						speed="3s"
						className="text-white"
					>
						{t('nav.technologies')}
					</StarBorder>
					<StarBorder
						as="a"
						href="#portfolio"
						color="cyan"
						speed="3s"
						className="text-white"
					>
						{t('nav.portfolio')}
					</StarBorder>
					<StarBorder
						as="a"
						href="#about"
						color="cyan"
						speed="3s"
						className="text-white"
					>
						{t('nav.about')}
					</StarBorder>
					<StarBorder
						as="a"
						href="#contact"
						color="cyan"
						speed="3s"
						className="text-white"
					>
						{t('nav.contact')}
					</StarBorder>
				</div>
				<div className="flex-1 flex justify-end">
					<div
						className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 p-1 text-xs"
						role="group"
						aria-label="Language selector"
					>
						<button
							type="button"
							className={`px-2.5 py-1 rounded-full transition ${
								language === 'es' ? 'bg-cyan-500 text-black' : 'text-white'
							}`}
							onClick={() => setLanguage('es')}
							aria-pressed={language === 'es'}
						>
							ES
						</button>
						<button
							type="button"
							className={`px-2.5 py-1 rounded-full transition ${
								language === 'en' ? 'bg-cyan-500 text-black' : 'text-white'
							}`}
							onClick={() => setLanguage('en')}
							aria-pressed={language === 'en'}
						>
							EN
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
}
