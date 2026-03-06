'use client';

import FloatingLines from '@/components/animations/FloatingLines';
import SplitText from '@/components/ui/SplitText';
import './hero.css';
import { useLanguage } from '@/components/i18n/LanguageProvider';

import React from 'react';

export default function Hero() {
	const { t, language } = useLanguage();

	return (
		<>
		<section
			id="hero"
			className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden"
			aria-label={t('hero.ariaLabel')}
			style={{
				paddingTop: '42px',
				background: 'linear-gradient(180deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%)',
				zIndex: 1
			}}
		>
			{/* Background animation */}
			<div
				className="absolute inset-0 w-full h-full pointer-events-none"
				style={{ zIndex: -1 }}
			>
				<FloatingLines
					enabledWaves={['top', 'middle', 'bottom']}
					lineCount={[10, 15, 20]}
					lineDistance={[8, 6, 4]}
					bendRadius={5}
					bendStrength={-0.5}
					interactive
					parallax
				/>
			</div>
			{/* Content */}
			<main className="hero-content relative w-full pointer-events-none" style={{ zIndex: 100 }}>
				<div className="hero-content-inner">
					<SplitText
						tag="h1"
						key={`hero-title-${language}`}
						text={t('hero.title')}
						className="hero-title"
						splitType="words, chars"
						delay={40}
						duration={0.5}
						repeatDelay={3}
						from={{ opacity: 0, y: 20 }}
						to={{ opacity: 1, y: 0 }}
						textAlign="right"
					/>
				</div>
				<div className="hero-logos-inline">
							<img
								src="/img/logo-solido-chico-remove.webp"
								alt={t('hero.logo1Alt')}
							className="opacity-90 hero-logo"
						/>
							<img
								src="/img/ZINNIA-remove.webp"
								alt={t('hero.logo2Alt')}
							className="opacity-90 hero-logo"
						/>
				</div>
				<div className="hero-content-inner">
					<SplitText
						tag="p"
						key={`hero-desc-${language}`}
						text={t('hero.description')}
						className="hero-description"
						splitType="words, chars"
						delay={30}
						duration={0.45}
						repeatDelay={3}
						from={{ opacity: 0, y: 15 }}
						to={{ opacity: 1, y: 0 }}
						textAlign="left"
					/>

					<a
						className="hero-button pointer-events-auto inline-flex items-center justify-center"
						href="https://www.instagram.com/zinniacode/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Visítanos en Instagram
					</a>

				</div>
			</main>
		</section>

		{/* Separador visual entre secciones */}
		<div className="w-full bg-black" style={{ height: '8px' }}></div>
		</>
	);
}
