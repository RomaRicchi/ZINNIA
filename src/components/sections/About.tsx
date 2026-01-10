'use client';

import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function About() {
	const { t } = useLanguage();

	return (
		<section
			id="about"
			className="section-default w-full section-bg relative z-0 pt-32 px-4 md:px-6 lg:px-8"
			aria-labelledby="about-title"
		>
			<div
				className="absolute inset-0 z-[-1]"
				style={{
					backgroundImage: 'url(/img/logo-tech.png)',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					opacity: 0.3,
				}}
			/>
			<h2
				id="about-title"
				className="text-3xl md:text-4xl font-bold text-center"
				style={{
					color: '#a855f7',
					textShadow: '0 2px 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)',
				}}
			>
				{t('about.title')}
			</h2>

			<div className="text-white text-center mt-4 max-w-3xl mx-auto text-lg space-y-4">
				{t('about.description').split('\n\n').map((paragraph, index) => (
					<p
						key={index}
						style={{
							textShadow: '0 2px 8px rgba(0, 0, 0, 0.9), 0 0 15px rgba(0, 0, 0, 0.7)',
						}}
					>
						{paragraph}
					</p>
				))}
			</div>

			<div className="mt-16 mb-16 w-full">
				<h3
					className="text-2xl font-semibold text-center mb-6"
					style={{
						color: '#a855f7',
						textShadow: '0 2px 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)',
					}}
				>
					{t('about.teamTitle')}
				</h3>
				<p
					className="text-white text-center max-w-3xl mx-auto text-base mb-10"
					style={{
						textShadow: '0 2px 8px rgba(0, 0, 0, 0.9), 0 0 15px rgba(0, 0, 0, 0.7)',
					}}
				>
					{t('about.teamDescription')}
				</p>

				<div className="max-w-4xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-12">
					{/* Fermin Fernandez - Columna Izquierda */}
					<div className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-xl" style={{ padding: '3rem 2rem' }}>
						<div style={{ width: '160px', height: '160px', minWidth: '160px', minHeight: '160px', flexShrink: 0 }} className="rounded-full overflow-hidden bg-white/10 mb-4">
							<img
								src="/images/team/fermin.png"
								alt="Fermin Fernandez"
								style={{ width: '160px', height: '160px', objectFit: 'cover' }}
							/>
						</div>
						<h4 className="text-xl font-semibold" style={{ color: '#a855f7' }}>
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
						<h4 className="text-xl font-semibold" style={{ color: '#a855f7' }}>
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
			</div>
		</section>
	);
}
