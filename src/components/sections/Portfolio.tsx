const projects = [
  {
    title: "Business Website for an Australian Client",
    description:
      "A modern, fast-loading business website built for an Australian client, focused on performance, clarity and brand identity.",
    image: "https://placehold.co/600x400/1b1b1b/ffffff?text=Business+Website",
  },
  {
    title: "3D Property Visualization App (Offline Processing)",
    description:
      "A React Native mobile application designed to manage and display 3D property files offline, enabling real estate visualisation without internet access.",
    image: "https://placehold.co/600x400/1b1b1b/ffffff?text=3D+Property+App",
  },
  {
    title: "Real Estate Management Platform",
    description:
      "A complete platform for managing properties, contracts, tenants and payments, built with clean architecture and secure authentication.",
    image: "https://placehold.co/600x400/1b1b1b/ffffff?text=Real+Estate+System",
  },
  {
    title: "Reservation & Payment System (Web API)",
    description:
      "A scalable reservation and payment API designed with ASP.NET Core, secure JWT authentication and database optimisations.",
    image: "https://placehold.co/600x400/1b1b1b/ffffff?text=Reservation+System",
  },
  {
    title: "Enterprise Management Suite (Role-Based Access)",
    description:
      "A multi-module enterprise solution with secure roles, clinical workflows and modular components, developed using Node.js and MySQL.",
    image: "https://placehold.co/600x400/1b1b1b/ffffff?text=Management+Suite",
  },
  {
    title: "Custom Business Website (Modular Architecture)",
    description:
      "A custom business website built with Express.js, HTML, CSS and modular components, focused on flexibility and maintainability.",
    image: "https://placehold.co/600x400/1b1b1b/ffffff?text=Custom+Website",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-default max-w-6xl mx-auto section-bg"
      aria-labelledby="portfolio-title"
    >
      <h2
        id="portfolio-title"
        className="text-3xl md:text-4xl font-bold text-white text-center"
      >
        Portfolio
      </h2>

      <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
        A selection of real-world projects built using modern technologies and best development practices.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
