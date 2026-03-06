'use client';

import { useLanguage } from '@/components/i18n/LanguageProvider';
import { useSection } from '@/components/layout/SectionProvider';

const NAV_ITEMS: { key: Parameters<ReturnType<typeof useSection>['setActiveSection']>[0]; labelKey: string }[] = [
	{ key: 'zinnia', labelKey: 'nav.zinnia' },
	{ key: 'services', labelKey: 'nav.services' },
	{ key: 'technologies', labelKey: 'nav.technologies' },
	// { key: 'portfolio', labelKey: 'nav.portfolio' },
	{ key: 'about', labelKey: 'nav.about' },
	{ key: 'contact', labelKey: 'nav.contact' },
];

export default function Footer() {
  const { t } = useLanguage();
  const { setActiveSection } = useSection();

  const handleNavClick = (section: Parameters<typeof setActiveSection>[0]) => {
    // Scroll suave a la sección correspondiente
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer
      className="!py-12 !px-6 border-t border-white/10 relative overflow-hidden"
      style={{
        backgroundImage: 'url("/images/foot.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay oscuro para mejor legibilidad */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
          {/* Company Info */}
          <div className="space-y-3 flex flex-col items-center text-center">
            <img
              src="/img/titulo-solido.webp"
              alt={t('hero.logo1Alt')}
              style={{ width: '272px', height: 'auto' }}
              className="opacity-90 rounded-lg"
            />
            <p className="text-gray-400 text-base max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 flex flex-col items-center text-center">
            <h4 className="font-semibold text-base mb-3" style={{ color: '#a855f7' }}>{t('footer.quickLinks')}</h4>
            <div className="flex flex-col gap-2 text-base">
							{NAV_ITEMS.map(({ key, labelKey }) => (
								<button
									key={key}
									onClick={() => handleNavClick(key)}
									className="text-center text-gray-300 hover:text-cyan-400 transition bg-transparent border border-transparent shadow-none outline-none"
								>
									{t(labelKey)}
								</button>
							))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-3 flex flex-col items-center text-center">
            <h4 className="font-semibold text-base mb-3" style={{ color: '#a855f7' }}>{t('footer.connect')}</h4>
            <div className="flex flex-col gap-2 text-base">
              <a
                href="https://github.com/Fermin2049"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                GitHub - Fermin
              </a>
              <a
                href="https://linkedin.com/in/fernandez-fermin-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                LinkedIn - Fermin
              </a>
              <a
                href="https://github.com/romaricchi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                GitHub - Romanela
              </a>
              <a
                href="https://linkedin.com/in/romanela-ricchiardi-885284118/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                LinkedIn - Romanela
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm relative z-10" style={{ color: '#6B21A8' }}>
        © {new Date().getFullYear()} ZINNIA Code. {t('footer.rights')}
      </div>
    </footer>
  );
}
