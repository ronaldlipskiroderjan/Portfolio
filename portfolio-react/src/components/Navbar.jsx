import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Projetos', href: '#projetos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fecha menu ao clicar fora
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = useCallback((href) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="navbar__inner">
          {/* Logo */}
          <a href="#home" className="navbar__logo" onClick={() => handleNavClick('#home')}>
            <span className="navbar__logo-bracket">&lt;</span>
            Ronald
            <span className="navbar__logo-bracket">/&gt;</span>
          </a>

          {/* Desktop nav */}
          <ul className="navbar__links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="navbar__link"
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <a
            href="https://www.linkedin.com/in/ronald-lipski-roderjan-352476368"
            target="_blank"
            rel="noreferrer"
            className="navbar__cta"
          >
            LinkedIn →
          </a>

          {/* Hamburguer mobile */}
          <button
            className="navbar__hamburger"
            aria-label="Menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            >
              <div className="mobile-drawer__header">
                <span className="navbar__logo">
                  <span className="navbar__logo-bracket">&lt;</span>Ronald<span className="navbar__logo-bracket">/&gt;</span>
                </span>
                <button className="navbar__hamburger" onClick={() => setMenuOpen(false)}>
                  <X size={22} />
                </button>
              </div>
              <ul className="mobile-drawer__links">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <a
                      href={item.href}
                      className="mobile-drawer__link"
                      onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="https://www.linkedin.com/in/ronald-lipski-roderjan-352476368"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mobile-drawer__cta"
              >
                LinkedIn →
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
