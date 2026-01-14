export default function StructuredData() {
	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'ZINNIA Code',
		url: 'https://zinnia-code.com.ar',
		logo: 'https://zinnia-code.com.ar/img/logo-solido-chico-remove.png',
		description: 'Empresa de desarrollo de software en San Luis, Argentina',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'San Luis',
			addressCountry: 'AR',
		},
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'customer service',
			email: 'info@zinnia-code.com.ar',
		},
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}
