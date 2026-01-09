'use client';

import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function ContactCTA() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="section-default max-w-4xl mx-auto text-center relative"
      aria-labelledby="contact-cta-title"
      style={{
        backgroundImage: 'url("/img/zinnia.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '4rem 2rem',
        borderRadius: '1rem',
        position: 'relative',
      }}
    >
      {/* Overlay oscuro para mejor legibilidad */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: '1rem',
        zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2
          id="contact-cta-title"
          className="text-3xl md:text-4xl font-bold text-white"
        >
          {t('contact.title')}
        </h2>

        <p className="text-gray-300 mt-4 text-lg">
          {t('contact.description')}
        </p>

        <button
          className="mt-8 px-10 py-4 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-lg hover:bg-white/20 transition"
        >
          {t('contact.cta')}
        </button>
      </div>
    </section>
  );
}
