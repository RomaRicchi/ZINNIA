'use client';

import FloatingLines from '@/components/animations/FloatingLines';
import SplitText from '@/components/ui/SplitText';
import './hero.css';
import { useLanguage } from '@/components/i18n/LanguageProvider';

import React from 'react';

export default function Hero() {
	const { t, language } = useLanguage();

	return (
		<section
			className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden"
			aria-label={t('hero.ariaLabel')}
		>
			{/* Background animation */}
			<div className="absolute inset-0 z-0 w-full h-full pointer-events-auto">
				<div className="absolute inset-0 w-full h-full">
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
			</div>
			{/* Logos */}
			<div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-8 pointer-events-none">
				<img
					src="/img/logo-solido-chico-remove.png"
					alt={t('hero.logo1Alt')}
					className="w-28 opacity-90"
				/>
				<img
					src="/img/ZINNIA-remove.png"
					alt={t('hero.logo2Alt')}
					className="w-28 opacity-90"
				/>
			</div>

			{/* Content */}
			<main className="hero-content relative max-w-4xl mx-auto z-20 px-6 pointer-events-none">
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

					<button className="hero-button pointer-events-auto">
						{t('hero.cta')}
					</button>
				</div>
			</main>
		</section>
	);
}
