'use client';

import { useLanguage } from '@/components/i18n/LanguageProvider';
import { useSection } from '@/components/layout/SectionProvider';

const NAV_ITEMS: { key: Parameters<ReturnType<typeof useSection>['setActiveSection']>[0]; labelKey: string }[] = [
	{ key: 'services', labelKey: 'nav.services' },
	{ key: 'technologies', labelKey: 'nav.technologies' },
	{ key: 'portfolio', labelKey: 'nav.portfolio' },
	{ key: 'about', labelKey: 'nav.about' },
	{ key: 'contact', labelKey: 'nav.contact' },
];

export default function Footer() {
  const { t } = useLanguage();
  const { setActiveSection } = useSection();

  return (
    <footer className="!py-12 !px-6 mt-24 border-t border-white/10 bg-black/20 backdrop-blur">
      <style jsx>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="space-y-3 flex flex-col items-center text-center">
            <img
              src="/img/titulo-solido.png"
              alt={t('hero.logo1Alt')}
              style={{ width: '272px', height: 'auto' }}
              className="opacity-90"
            />
            <p className="text-gray-400 text-sm max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 flex flex-col items-center text-center">
            <h4 className="text-white font-semibold text-sm mb-3">{t('footer.quickLinks')}</h4>
            <div className="flex flex-col gap-2 text-sm">
							{NAV_ITEMS.map(({ key, labelKey }) => (
								<button
									key={key}
									onClick={() => setActiveSection(key)}
									className="text-center text-gray-300 hover:text-cyan-400 transition bg-transparent border border-transparent shadow-none outline-none"
								>
									{t(labelKey)}
								</button>
							))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-3 flex flex-col items-center text-center">
            <h4 className="text-white font-semibold text-sm mb-3">{t('footer.connect')}</h4>
            <div className="flex flex-col gap-2 text-sm">
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

      <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} ZINNIA Code. {t('footer.rights')}
      </div>
    </footer>
  );
}
