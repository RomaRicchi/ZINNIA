'use client';

import React from 'react';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import './zinniaInfo.css';

export default function ZinniaInfo() {
  const { t } = useLanguage();

  return (
    <>
    <section id="zinnia" className="zinnia-section section-bg" aria-labelledby="zinnia-title">
      <div className="zinnia-container">
        <div className="zinnia-title-container">
          <img
            src="/img/ZINNIA-remove.webp"
            alt="ZINNIA"
            className="zinnia-title-image"
          />
        </div>

        <div className="zinnia-main-content">
          {/* Descripcion con imagen trabajo conjunto */}
          <div className="zinnia-description-section">
            <div className="zinnia-card zinnia-description-card">
              <h3 className="zinnia-card-title">{t('zinniaInfo.brand')}</h3>
              <p className="zinnia-description">
                {t('zinniaInfo.description')}
              </p>
            </div>
            <div className="zinnia-image-frame zinnia-description-image-container">
              <img
                src="/img/trbajo-conjunto.webp"
                alt="Trabajo en conjunto"
                className="zinnia-section-image"
              />
            </div>
          </div>

          {/* Lo que nos distingue con imagen mano */}
          <div className="zinnia-features-section">
            <div className="zinnia-image-frame zinnia-features-image-container">
              <img
                src="/img/mano.webp"
                alt="Mano"
                className="zinnia-section-image"
              />
            </div>
            <div className="zinnia-card zinnia-features">
              <h3 className="zinnia-subtitle">{t('zinniaInfo.featuresTitle')}</h3>
              <ul className="zinnia-list">
                <li>{t('zinniaInfo.features.feature1')}</li>
                <li>{t('zinniaInfo.features.feature2')}</li>
                <li>{t('zinniaInfo.features.feature3')}</li>
                <li>{t('zinniaInfo.features.feature4')}</li>
              </ul>
            </div>
          </div>

          {/* Nuestra mision con imagen crecimiento */}
          <div className="zinnia-mission-section">
            <div className="zinnia-card zinnia-mission">
              <h3 className="zinnia-subtitle">{t('zinniaInfo.missionTitle')}</h3>
              <p className="zinnia-mission-text">
                {t('zinniaInfo.missionText')}
              </p>
            </div>
            <div className="zinnia-image-frame zinnia-mission-image-container">
              <img
                src="/img/crecimiento.webp"
                alt="Crecimiento"
                className="zinnia-section-image"
              />
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
