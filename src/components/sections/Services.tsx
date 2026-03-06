'use client';

import React, { useState } from 'react';
import { Briefcase, ChevronDown, Cloud, Code, Server, Smartphone, TrendingUp } from 'lucide-react';
import './services.css';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { sanitizeHtml } from '@/utils/sanitize';

const servicesData = [
  {
    key: 'fullStack',
    icon: Code,
    image: '/images/Full-Stack.png',
  },
  {
    key: 'backend',
    icon: Server,
    image: '/images/Backend.png',
  },
  {
    key: 'mobile',
    icon: Smartphone,
    image: '/images/Mobile.png',
  },
  {
    key: 'cloud',
    icon: Cloud,
    image: '/images/Cloud.png',
  },
  {
    key: 'business',
    icon: Briefcase,
    image: '/images/Business.png',
  },
  {
    key: 'consulting',
    icon: TrendingUp,
    image: '/images/Technical.png',
  },
];

export default function Services() {
  const { t } = useLanguage();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const handleToggle = (title: string) => {
    setExpandedService(title === expandedService ? null : title);
  };

  return (
    <section id="services" className="services-section section-bg" aria-labelledby="services-title">
      <h2 id="services-title" className="services-heading">
        {t('services.title')}
      </h2>

      <p className="services-subtitle">
        {t('services.subtitle')}
      </p>

      <div className="services-list">
        {servicesData.map((service) => {
          const Icon = service.icon;
          const title = t(`services.items.${service.key}.title`);
          const description = t(`services.items.${service.key}.description`);
          const details = t(`services.items.${service.key}.details`);
          const isExpanded = title === expandedService;
          const contentId = `content-${service.key}`;

          return (
            <div key={service.key} className="service-item">
              <button
                className={`service-header ${isExpanded ? 'active' : ''}`}
                onClick={() => handleToggle(title)}
                aria-expanded={isExpanded}
                aria-controls={contentId}
              >
                <div className="service-header-left">
                  <Icon className="service-icon" />
                  <h3 className="service-title">{title}</h3>
                </div>
                <ChevronDown className={`chevron ${isExpanded ? 'rotated' : ''}`} />
              </button>

              <div
                id={contentId}
                className={`accordion-body ${isExpanded ? 'expanded' : ''}`}
              >
                {isExpanded && (
                  <div className="accordion-content">
                    <div className="service-text">
                      <p
                        className="service-description"
                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(description) }}
                      />
                      <p className="service-details">
                        <strong>{t('services.detailsLabel')}:</strong> {details}
                      </p>
                    </div>

                    <div className="service-image">
                      <img
                        src={service.image}
                        alt={`Visual for ${title}`}
                        className="service-image-img"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
