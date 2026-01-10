'use client';

import { useLanguage } from '@/components/i18n/LanguageProvider';

const technologies = [
  { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/3C873A" },
  { name: "TailwindCSS", logo: "https://cdn.simpleicons.org/tailwindcss/38BDF8" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
];

export default function Technologies() {
  const { t } = useLanguage();

  return (
    <section
      id="technologies"
      className="section-default max-w-6xl mx-auto section-bg pt-32"
      aria-labelledby="technologies-title"
    >
      <h2
        id="technologies-title"
        className="text-3xl md:text-4xl font-bold text-center"
        style={{
          color: '#a855f7',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)',
        }}
      >
        {t('technologies.title')}
      </h2>

      <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
        {t('technologies.description')}
      </p>

      <div className="mt-12 mb-16 grid grid-cols-3 gap-10 items-center">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition"
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-28 h-28 object-contain"
            />
            <span className="text-white text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
