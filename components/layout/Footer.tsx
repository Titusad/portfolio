export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b border-white/10">
          {/* Brand / tagline */}
          <div className="flex flex-col gap-4">
            <span className="text-body font-light tracking-[0.12em] uppercase text-white">
              D/C
            </span>
            <p className="text-body-s font-light leading-relaxed text-gray">
              Available for projects.
              <br />
              Senior Product Designer based in Medellín.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="text-label font-medium tracking-label uppercase text-[#555555]">
              Contact
            </span>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:dave@davecastrillon.com"
                className="text-body-s font-light text-[#AAAAAA] hover:text-white transition-colors duration-200"
              >
                dave@davecastrillon.com
              </a>
              <a
                href="https://linkedin.com/in/davecastrillon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-s font-light text-[#AAAAAA] hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Location / languages */}
          <div className="flex flex-col gap-4">
            <span className="text-label font-medium tracking-label uppercase text-[#555555]">
              Location
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-body-s font-light text-[#AAAAAA]">Medellín, Colombia</span>
              <span className="text-body-s font-light text-[#AAAAAA]">
                Spanish · English
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <span className="text-label font-light text-[#555555]">
            © {year} David Castrillón
          </span>
          <span className="text-label font-light text-[#555555]">
            Senior Product Designer
          </span>
        </div>
      </div>
    </footer>
  )
}
