const technologies = [
  { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/3C873A" },
  { name: "TailwindCSS", logo: "https://cdn.simpleicons.org/tailwindcss/38BDF8" },
  { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws/FF9900" },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="section-default max-w-6xl mx-auto section-bg"
      aria-labelledby="technologies-title"
    >
      <h2
        id="technologies-title"
        className="text-3xl md:text-4xl font-bold text-white text-center"
      >
        Technologies We Use
      </h2>

      <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
        We choose reliable, modern and secure technologies to deliver long-lasting digital solutions.
      </p>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition"
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-14 h-14 object-contain"
            />
            <span className="text-white text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
