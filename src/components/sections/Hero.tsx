'use client';

import FloatingLines from '@/components/animations/FloatingLines';
import SplitText from '@/components/ui/SplitText';
import './hero.css';

import React from 'react';

export default function Hero() {
	return (
		<section
			className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden"
			aria-label="Hero section"
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

			{/* Content */}
			<main className="hero-content relative max-w-4xl mx-auto z-20 px-6 pointer-events-none">
				<div className="hero-content-inner">
					<SplitText
						tag="h1"
						text="Modern IT Solutions in Argentina"
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
						text="We build high-performance websites, mobile apps and digital experiences. Custom IT solutions for small and medium businesses across Argentina."
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
						Get a Free Consultation
					</button>
				</div>
			</main>
		</section>
	);
}
