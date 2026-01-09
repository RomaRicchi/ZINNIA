export default function About() {
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
				About Us
			</h2>

			<p className="text-gray-300 text-center mt-4 max-w-3xl mx-auto text-lg">
				ZINNIA Code is an IT development company based in Argentina. We specialise
				in building modern websites, mobile applications, backend systems and custom
				digital solutions for businesses looking to improve efficiency and expand
				their digital presence.
			</p>

			<div className="mt-16">
				<h3 className="text-2xl font-semibold text-white text-center mb-10">
					Our Team
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
							Full Stack Developer & Co-Founder
						</p>
						<p className="text-gray-400 text-sm mt-4">
							Backend specialist in .NET, Node.js and scalable architectures.
							Focused on high-performance systems and business automation.
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
							Full Stack Developer & Co-Founder
						</p>
						<p className="text-gray-400 text-sm mt-4">
							Responsible for client communication and ensuring high-quality
							delivery for businesses looking to grow their digital presence.
						</p>
						<div className="flex items-center justify-center mt-4 mb-4" style={{ gap: '2rem' }}>
							<a
								href="https://github.com/romanela"
								target="_blank"
								rel="noopener noreferrer"
								className="text-cyan-400 hover:text-cyan-300 transition text-sm"
							>
								GitHub
							</a>
							<a
								href="https://linkedin.com/in/romanela-ricchiardi"
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
