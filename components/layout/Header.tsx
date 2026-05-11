'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '/work', label: 'Work' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-[0_1px_0_0_#E0E0E0]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-body font-light tracking-[0.12em] uppercase text-black hover:text-red-accent transition-colors duration-200"
          >
            D/C
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-body-s font-light tracking-wide text-gray-dark hover:text-black transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-body-s font-light tracking-wide text-white bg-red-accent px-5 py-2 hover:bg-[#8a1719] transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-black p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-light px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-body-l font-light text-black hover:text-red-accent transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-body-l font-light text-white bg-red-accent px-5 py-3 text-center hover:bg-[#8a1719] transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
