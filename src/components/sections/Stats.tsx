'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { Rocket, Laptop, Users, Coffee } from 'lucide-react';
import './stats.css';

export default function Stats() {
	const { t } = useLanguage();
	const [animated, setAnimated] = useState(false);
	const [stats, setStats] = useState({
		projectsCompleted: 0,
		yearsExperience: 0,
		satisfiedClients: 0,
		coffeeCups: 0,
	});

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setAnimated(true);
				}
			},
			{ threshold: 0.1 }
		);

		const section = document.getElementById('stats');
		if (section) {
			observer.observe(section);
		}

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!animated) return;

		const targetValues = {
			projectsCompleted: 12,
			yearsExperience: 4,
			satisfiedClients: 15,
			coffeeCups: 250,
		};

		const duration = 2000; // 2 segundos
		const steps = 60;

		let currentStep = 0;

		const interval = setInterval(() => {
			currentStep++;

			setStats((prev) => ({
				projectsCompleted: Math.min(
					prev.projectsCompleted + targetValues.projectsCompleted / steps,
					targetValues.projectsCompleted
				),
				yearsExperience: Math.min(
					prev.yearsExperience + targetValues.yearsExperience / steps,
					targetValues.yearsExperience
				),
				satisfiedClients: Math.min(
					prev.satisfiedClients + targetValues.satisfiedClients / steps,
					targetValues.satisfiedClients
				),
				coffeeCups: Math.min(
					prev.coffeeCups + targetValues.coffeeCups / steps,
					targetValues.coffeeCups
				),
			}));

			if (currentStep >= steps) {
				clearInterval(interval);
			}
		}, duration / steps);

		return () => clearInterval(interval);
	}, [animated]);

	const sectionStyle: CSSProperties = {
		backgroundImage: 'url(/images/tech-mano.webp)',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		position: 'relative',
		// Permite elegir fácilmente la imagen de fondo de las cards
		// cambiando esta variable (p.ej. url(/images/code.webp))
		['--stat-card-image' as '--stat-card-image']: "url('/images/code.webp')",
	};

	return (
		<>
			{/* Separador visual anterior */}
			<div className="w-full bg-black" style={{ height: '8px' }}></div>

			<section
				id="stats"
				className="stats-section section-bg"
				aria-labelledby="stats-title"
				style={sectionStyle}
			>
				<div
					className="absolute inset-0 z-[-1]"
					style={{
						backgroundColor: 'rgba(255, 255, 255, 0.85)',
					}}
				/>
				<div className="relative z-10">
					<h2
						id="stats-title"
						className="text-3xl md:text-4xl font-extrabold text-center stats-title"
						style={{
							color: '#ffffff',
							textShadow: '0 2px 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)',
						}}
					>
						{t('stats.title')}
					</h2>

					<p className="stats-subtitle">
						{t('stats.description')}
					</p>

					<div className="stats-grid">
						{/* Projects Completed */}
						<div className="stat-card">
							<div className="stat-icon">
								<Rocket size={48} strokeWidth={2} />
							</div>
							<div className="stat-number">
								{Math.round(stats.projectsCompleted)}
							</div>
							<div className="stat-label">
								{t('stats.projectsCompleted')}
							</div>
						</div>

						{/* Years Experience */}
						<div className="stat-card">
							<div className="stat-icon">
								<Laptop size={48} strokeWidth={2} />
							</div>
							<div className="stat-number">
								{Math.round(stats.yearsExperience)}+
							</div>
							<div className="stat-label">
								{t('stats.yearsExperience')}
							</div>
						</div>

						{/* Satisfied Clients */}
						<div className="stat-card">
							<div className="stat-icon">
								<Users size={48} strokeWidth={2} />
							</div>
							<div className="stat-number">
								{Math.round(stats.satisfiedClients)}
							</div>
							<div className="stat-label">
								{t('stats.satisfiedClients')}
							</div>
						</div>

						{/* Coffee Cups */}
						<div className="stat-card">
							<div className="stat-icon">
								<Coffee size={48} strokeWidth={2} />
							</div>
							<div className="stat-number">
								{Math.round(stats.coffeeCups)}
							</div>
							<div className="stat-label">
								{t('stats.coffeeCups')}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Separador visual entre secciones */}
			<div className="w-full bg-black" style={{ height: '8px' }}></div>
		</>
	);
}
