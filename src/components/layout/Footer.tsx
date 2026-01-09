'use client';

import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 mt-24 border-t border-white/10 bg-black/20 backdrop-blur">
      <div className="max-w-6xl mx-auto">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>

          {/* Company Info */}
          <div style={{ gridColumn: 'span 2' }}>
            <h3 className="text-white font-semibold text-lg mb-3">
              ZINNIA<span className="text-cyan-400">&lt;code&gt;</span>
            </h3>
            <p className="text-gray-400 text-sm max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">{t('footer.quickLinks')}</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#services" className="text-gray-300 hover:text-cyan-400 transition">
                {t('nav.services')}
              </a>
              <a href="#technologies" className="text-gray-300 hover:text-cyan-400 transition">
                {t('nav.technologies')}
              </a>
              <a href="#portfolio" className="text-gray-300 hover:text-cyan-400 transition">
                {t('nav.portfolio')}
              </a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition">
                {t('nav.about')}
              </a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition">
                {t('nav.contact')}
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
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

      <div className="mt-10 text-center text-gray-500 text-xs">
        ЖИ {new Date().getFullYear()} ZINNIA Code. {t('footer.rights')}
      </div>
    </footer>
  );
}
