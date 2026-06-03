import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Problem', href: '#problem' },
  { label: 'Empathy', href: '#empathy' },
  { label: 'Research', href: '#research' },
  { label: 'Persona', href: '#persona' },
  { label: 'Journey', href: '#journey' },
  { label: 'Root Cause', href: '#rootcause' },
  { label: 'HMW', href: '#hmw' },
  { label: 'Ideation', href: '#ideation' },
  { label: 'Prototype', href: '#prototype' },
  { label: 'Team', href: '#team' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = links.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { threshold: 0.3 }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-md bg-white/80 border-b border-stone-200/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Wordmark */}
        <div className="flex flex-col leading-none">
          <span
            className="font-cormorant font-semibold text-xl"
            style={{ color: scrolled ? '#1A1614' : '#F5F0E8' }}
          >
            Lok Sabha
          </span>
          <span
            className="font-dm text-[10px] tracking-widest uppercase"
            style={{ color: scrolled ? '#B85C38' : '#B85C38' }}
          >
            Art of Heritage · MU · 2026
          </span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-dm text-xs font-medium tracking-widest uppercase transition-colors duration-200 ${
                  active === link.href.slice(1)
                    ? 'text-terracotta'
                    : scrolled
                    ? 'text-ink/60 hover:text-terracotta'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen
            ? <X size={22} color={scrolled ? '#1A1614' : '#F5F0E8'} />
            : <Menu size={22} color={scrolled ? '#1A1614' : '#F5F0E8'} />
          }
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden backdrop-blur-md bg-white/95 border-b border-stone-200"
          >
            <ul className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col gap-3">
              {links.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-dm text-xs font-medium tracking-widest uppercase block py-1 ${
                      active === link.href.slice(1) ? 'text-terracotta' : 'text-ink/70 hover:text-terracotta'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
