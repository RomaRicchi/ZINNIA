'use client';

import StarBorder from '@/components/ui/StarBorder';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { useSection, SectionKey } from '@/components/layout/SectionProvider';
import { useEffect, useState } from 'react';

const NAV_ITEMS: { key: SectionKey; labelKey: string }[] = [
	{ key: 'zinnia', labelKey: 'nav.zinnia' },
	{ key: 'services', labelKey: 'nav.services' },
	{ key: 'technologies', labelKey: 'nav.technologies' },
	// { key: 'portfolio', labelKey: 'nav.portfolio' },
	{ key: 'about', labelKey: 'nav.about' },
	{ key: 'contact', labelKey: 'nav.contact' },
];

export default function Header() {
	const { language, setLanguage, t } = useLanguage();
	const { setActiveSection, activeSection } = useSection();
	const [menuOpen, setMenuOpen] = useState(false);

	const handleNav = (section: SectionKey) => (event: React.MouseEvent) => {
		event.preventDefault();
		setMenuOpen(false);

		// Scroll suave a la sección correspondiente
		const element = document.getElementById(section);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setMenuOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<header className="fixed top-0 left-0 w-full z-[9999] bg-black/40 backdrop-blur-xl border-b border-white/10">
			<nav className="max-w-6xl mx-auto px-4 py-4 md:px-6 md:py-5 flex items-center gap-4 relative">
				<div className="flex items-center gap-3">
					<button
						type="button"
						className="menu-toggle-btn inline-flex items-center justify-center md:hidden"
						onClick={() => setMenuOpen((prev) => !prev)}
						aria-label="Abrir menú"
						aria-expanded={menuOpen}
						style={{ marginLeft: '20px', marginRight: '6px' }}
					>
						<span className="sr-only">Toggle menu</span>
						<div className="menu-toggle-lines">
							<span className={`menu-toggle-line ${menuOpen ? 'top-open' : ''}`}></span>
							<span className={`menu-toggle-line ${menuOpen ? 'middle-open' : ''}`}></span>
							<span className={`menu-toggle-line ${menuOpen ? 'bottom-open' : ''}`}></span>
						</div>
					</button>
					<button
						type="button"
						onClick={handleNav('hero')}
						aria-pressed={activeSection === 'hero'}
						className="hidden md:flex items-center justify-center transition overflow-hidden"
						aria-label="Ir al inicio"
						style={{
							width: 80,
							height: 80,
							padding: 0,
						}}
					>
						<img
							src="/img/logo-solido-chico-remove.webp"
							alt={t('hero.logo1Alt')}
							style={{ width: '100%', height: '100%' }}
							className="object-cover"
						/>
					</button>
				</div>
				<div className="absolute left-1/2 -translate-x-1/2 md:hidden">
					<button
						type="button"
						onClick={handleNav('hero')}
						aria-pressed={activeSection === 'hero'}
						className="flex items-center justify-center transition overflow-hidden"
						aria-label="Ir al inicio"
						style={{
							width: 80,
							height: 80,
							padding: 0,
						}}
					>
						<img
							src="/img/logo-solido-chico-remove.webp"
							alt={t('hero.logo1Alt')}
							style={{ width: '100%', height: '100%' }}
							className="object-cover"
						/>
					</button>
				</div>
				<div className="flex-1 flex items-center justify-end gap-3">
					<div className="hidden md:flex flex-nowrap items-center justify-center gap-2 lg:gap-4 text-xs lg:text-sm flex-1 min-w-0 px-1 overflow-x-auto">
						{NAV_ITEMS.map(({ key, labelKey }) => (
							<StarBorder
								key={key}
								as="a"
								href={`#${key}`}
								color="#a855f7"
								speed="3s"
								className="text-white shrink-0"
								onClick={handleNav(key)}
							>
								{t(labelKey)}
							</StarBorder>
						))}
					</div>
					<div
						className="flex items-center gap-2 rounded-full p-1 text-xs"
						style={{
							marginLeft: '6px',
							marginRight: '8px',
							border: '1px solid rgba(168, 85, 247, 0.4)',
							background: 'rgba(168, 85, 247, 0.1)'
						}}
					>
						<button
							type="button"
							className="px-2.5 py-1 rounded-full transition"
							style={{
								backgroundColor: language === 'es' ? '#a855f7' : 'transparent',
								color: language === 'es' ? '#0b0b0b' : '#a855f7',
								border: '1px solid #a855f7',
								marginLeft: '6px',
								marginRight: '6px',
							}}
							onClick={() => setLanguage('es')}
							aria-pressed={language === 'es'}
						>
							ES
						</button>
						<button
							type="button"
							className="px-2.5 py-1 rounded-full transition"
							style={{
								backgroundColor: language === 'en' ? '#a855f7' : 'transparent',
								color: language === 'en' ? '#0b0b0b' : '#a855f7',
								border: '1px solid #a855f7',
								marginLeft: '6px',
								marginRight: '6px',
							}}
							onClick={() => setLanguage('en')}
							aria-pressed={language === 'en'}
						>
							EN
						</button>
					</div>
				</div>

				{menuOpen && (
					<div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-purple-900/95 via-purple-900/90 to-purple-800/90 backdrop-blur-lg mt-2 rounded-b-xl shadow-lg">
						<div className="flex flex-col gap-4 px-4 py-4 text-sm">
							{NAV_ITEMS.map(({ key, labelKey }) => (
								<button
									key={key}
									onClick={handleNav(key)}
									className="text-left bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent rounded-full px-3 py-1.5 shadow-none outline-none inline-flex w-fit transition-colors focus:ring-0"
									style={{
										backgroundColor: 'transparent',
										color: '#ffffff',
										border: '1px solid #ffffff',
										padding: '10px 14px',
										marginLeft: '4px',
										marginRight: '4px',
										marginTop: '6px',
										marginBottom: '6px',
										fontWeight: 'bold',
									}}
								>
									{t(labelKey)}
								</button>
							))}
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}
