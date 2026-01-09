'use client';

import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function About() {
	const { t } = useLanguage();

	return (
		<section
			id="about"
			className="section-default max-w-6xl mx-auto section-bg"
			aria-labelledby="about-title"
		>
			<h2
				id="about-title"
				className="text-3xl md:text-4xl font-bold text-white text-center"
			>
				{t('about.title')}
			</h2>

			<p className="text-gray-300 text-center mt-4 max-w-3xl mx-auto text-lg">
				{t('about.description')}
			</p>

			<div className="mt-16">
				<h3 className="text-2xl font-semibold text-white text-center mb-10">
					{t('about.teamTitle')}
				</h3>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', width: '100%' }}>
					{/* Fermin Fernandez - Columna Izquierda */}
					<div className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-xl" style={{ padding: '3rem 2rem' }}>
						<div style={{ width: '160px', height: '160px', minWidth: '160px', minHeight: '160px', flexShrink: 0 }} className="rounded-full overflow-hidden bg-white/10 mb-4">
							<img
								src="/images/team/fermin.png"
								alt="Fermin Fernandez"
								style={{ width: '160px', height: '160px', objectFit: 'cover' }}
							/>
						</div>
						<h4 className="text-xl font-semibold text-white">
							Fermin Fernandez
						</h4>
						<p className="text-gray-300 text-sm mt-1">
							{t('about.roles.fullStackCoFounder')}
						</p>
						<p className="text-gray-400 text-sm mt-4">
							{t('about.team.fermin.bio')}
						</p>
						<div className="flex items-center justify-center mt-4 mb-4" style={{ gap: '2rem' }}>
							<a
								href="https://github.com/Fermin2049"
								target="_blank"
								rel="noopener noreferrer"
								className="text-cyan-400 hover:text-cyan-300 transition text-sm"
							>
								GitHub
							</a>
							<a
								href="https://linkedin.com/in/fernandez-fermin-dev"
								target="_blank"
								rel="noopener noreferrer"
								className="text-cyan-400 hover:text-cyan-300 transition text-sm"
							>
								LinkedIn
							</a>
						</div>
					</div>

					{/* Romanela Ricchiardi - Columna Derecha */}
					<div className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-xl" style={{ padding: '3rem 2rem' }}>
						<div style={{ width: '160px', height: '160px', minWidth: '160px', minHeight: '160px', flexShrink: 0 }} className="rounded-full overflow-hidden bg-white/10 mb-4">
							<img
								src="/images/team/roma.jpg"
								alt="Romanela Ricchiardi"
								style={{ width: '160px', height: '160px', objectFit: 'cover' }}
							/>
						</div>
						<h4 className="text-xl font-semibold text-white">
							Romanela Ricchiardi
						</h4>
						<p className="text-gray-300 text-sm mt-1">
							{t('about.roles.fullStackCoFounder')}
						</p>
						<p className="text-gray-400 text-sm mt-4">
							{t('about.team.romanela.bio')}
						</p>
						<div className="flex items-center justify-center mt-4 mb-4" style={{ gap: '2rem' }}>
							<a
								href="https://github.com/romaricchi"
								target="_blank"
								rel="noopener noreferrer"
								className="text-cyan-400 hover:text-cyan-300 transition text-sm"
							>
								GitHub
							</a>
							<a
								href="https://linkedin.com/in/romanela-ricchiardi-885284118/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-cyan-400 hover:text-cyan-300 transition text-sm"
							>
								LinkedIn
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
