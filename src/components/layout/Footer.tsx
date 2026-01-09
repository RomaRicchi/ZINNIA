export default function Footer() {
  return (
    <footer className="py-12 px-6 mt-24 border-t border-white/10 bg-black/20 backdrop-blur">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">

        {/* Company Info */}
        <div>
          <h3 className="text-white font-semibold text-lg">ZINNIA<span className="text-cyan-400">&lt;code&gt;</span></h3>
          <p className="text-gray-400 text-sm mt-2 max-w-xs">
            An IT development company based in Argentina.
            We build modern, fast and secure digital solutions.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2 text-sm">
          <a href="#services" className="text-gray-300 hover:text-white transition">
            Services
          </a>
          <a href="#portfolio" className="text-gray-300 hover:text-white transition">
            Portfolio
          </a>
          <a href="#about" className="text-gray-300 hover:text-white transition">
            About Us
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-2 text-sm text-gray-300">
          <a
            href="https://github.com/Fermin2049"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/fernandez-fermin-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} ZINNIA Code. All rights reserved.
      </div>
    </footer>
  );
}
