import { useState, useEffect, useCallback } from "react"
import { motion as Motion, AnimatePresence } from "framer-motion"
import { Menu, X, Coffee } from "lucide-react"
import "./Navbar.css"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#skills" },
  { label: "Formação", href: "#formacao" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const handleNavClick = useCallback((href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const logo = (
    <>
      <span className="navbar__logo-icon"><Coffee size={18} /></span>
      <span>Ronald</span><span className="navbar__logo-ext">.java</span>
    </>
  )

  return (
    <>
      <Motion.nav
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="navbar__inner">
          <a href="#home" className="navbar__logo" onClick={(event) => {
            event.preventDefault()
            handleNavClick("#home")
          }}>
            {logo}
          </a>

          <ul className="navbar__links">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="navbar__link"
                  onClick={(event) => { event.preventDefault(); handleNavClick(item.href) }}
                >
                  <span>0{index + 1}.</span> {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="mailto:ronaldlipski1@gmail.com"
            className="navbar__cta"
          >
            Vamos conversar
          </a>

          <button
            className="navbar__hamburger"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <Motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <Motion.div
              className="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
            >
              <div className="mobile-drawer__header">
                <span className="navbar__logo">{logo}</span>
                <button className="navbar__hamburger" aria-label="Fechar menu" onClick={() => setMenuOpen(false)}>
                  <X size={22} />
                </button>
              </div>
              <ul className="mobile-drawer__links">
                {navItems.map((item, index) => (
                  <Motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                  >
                    <a
                      href={item.href}
                      className="mobile-drawer__link"
                      onClick={(event) => { event.preventDefault(); handleNavClick(item.href) }}
                    >
                      <span>0{index + 1}</span>
                      {item.label}
                    </a>
                  </Motion.li>
                ))}
              </ul>
              <a href="mailto:ronaldlipski1@gmail.com" className="btn btn-primary mobile-drawer__cta">
                Vamos conversar
              </a>
            </Motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
