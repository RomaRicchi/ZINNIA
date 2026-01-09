'use client';

import React, { useState } from 'react';
import { Briefcase, ChevronDown, Cloud, Code, Server, Smartphone, TrendingUp } from 'lucide-react';
import './services.css';

const servicesData = [
  {
    title: 'Full-Stack Web Development (React / Next.js)',
    description:
      '**Modern, High-Performance Development:** We create complete and scalable web applications. We use **Next.js** and **React** to ensure ultra-fast loading times (SSR/SSG), excellent SEO, and a fluid user experience, ideal for complex dashboards, client portals, and business platforms.',
    details:
      'Specializing in TypeScript, responsive design with Tailwind CSS, speed optimization (Core Web Vitals), and modular architecture for easy maintenance.',
    icon: Code,
    image: '/images/Full-Stack.png',
  },
  {
    title: 'Backend & API Development (.NET Core / Node.js)',
    description:
      '**Robust and Secure Core Systems:** We design and build the infrastructure that powers your application. We focus on RESTful and GraphQL APIs using **.NET Core** (C#) or **Node.js/Express**, guaranteeing security, performance, and horizontal scalability.',
    details:
      'Clean Architecture/DDD implementation, advanced authentication (JWT), database management (SQL Server, PostgreSQL), and exhaustive testing.',
    icon: Server,
    image: '/images/Backend.png',
  },
  {
    title: 'Mobile App Development (Android & React Native)',
    description:
      '**Native and Cross-Platform Experience:** We develop mobile applications for Android using **Kotlin/Java** with modern patterns (MVVM), and also build efficient cross-platform solutions with **React Native**. We ensure your app runs smoothly on all devices.',
    details: 'Payment integration (Stripe), offline support, push notifications, and UX design optimized for user retention.',
    icon: Smartphone,
    image: '/images/Mobile.png',
  },
  {
    title: 'Cloud, DevOps & Technical Architecture',
    description:
      '**Infrastructure as Code (IaC):** We provide cloud deployment, monitoring, and management solutions (primarily **AWS** or Google Cloud). We create automated CI/CD pipelines using **Docker** and **Kubernetes** to ensure a fast and reliable software lifecycle.',
    details:
      'High-availability environment configuration, backup strategies, cloud cost reduction, and infrastructure security optimization.',
    icon: Cloud,
    image: '/images/Cloud.png',
  },
  {
    title: 'Business Systems & Workflow Automation',
    description:
      '**Efficiency Through Software:** We transform manual processes into automated systems. We build custom software, such as inventory management systems, internal CRMs, booking systems, and analytics platforms.',
    details:
      'Integration with existing (legacy) systems, development of personalized payment modules, and automation of reports and email marketing.',
    icon: Briefcase,
    image: '/images/Business.png',
  },
  {
    title: 'Technical Consulting & Software Advisory',
    description:
      '**Strategic Technology Guidance:** We offer expert consulting to help you make informed decisions about your technology stack, architecture, and development roadmap. Ideal for startups or companies undergoing digital transformation.',
    details: 'Code auditing, migration planning, project estimation, and internal technical team training.',
    icon: TrendingUp,
    image: '/images/Technical.png',
  },
];

export default function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const handleToggle = (title: string) => {
    setExpandedService(title === expandedService ? null : title);
  };

  return (
    <section id="services" className="services-section section-bg" aria-labelledby="services-title">
      <h2 id="services-title" className="services-heading">
        Our Premium Development Services ⚙️
      </h2>

      <p className="services-subtitle">
        Click on a service below to see key technological solutions and detailed focus areas.
      </p>

      <div className="services-list">
        {servicesData.map((service) => {
          const Icon = service.icon;
          const isExpanded = service.title === expandedService;
          const contentId = `content-${service.title.replace(/\s/g, '-')}`;

          return (
            <div key={service.title} className="service-item">
              <button
                className={`service-header ${isExpanded ? 'active' : ''}`}
                onClick={() => handleToggle(service.title)}
                aria-expanded={isExpanded}
                aria-controls={contentId}
              >
                <div className="service-header-left">
                  <Icon className="service-icon" />
                  <h3 className="service-title">{service.title}</h3>
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
                        dangerouslySetInnerHTML={{ __html: service.description }}
                      />
                      <p className="service-details">
                        <strong>Key Details:</strong> {service.details}
                      </p>
                    </div>

                    <div className="service-image">
                      <img
                        src={service.image}
                        alt={`Visual for ${service.title}`}
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
