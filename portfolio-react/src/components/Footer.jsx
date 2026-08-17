import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import './Footer.css'

const contactLinks = [
  {
    icon: <Mail size={18} />,
    label: 'ronaldlipski1@gmail.com',
    href: 'mailto:ronaldlipski1@gmail.com',
  },
  {
    icon: <Phone size={18} />,
    label: '(41) 99994-5293',
    href: 'https://wa.me/5541999945293',
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ronald-lipski-roderjan-352476368',
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    href: 'https://github.com/ronaldlipskiroderjan',
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container">
        <motion.div
          className="footer__inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo e tagline */}
          <div className="footer__brand">
            <span className="footer__logo">
              <span className="footer__logo-bracket">&lt;</span>
              Ronald
              <span className="footer__logo-bracket">/&gt;</span>
            </span>
            <p className="footer__tagline">
              Estudante de Engenharia de Software · Curitiba, PR
            </p>
          </div>

          <div className="footer__divider" />

          {/* Links de contato */}
          <div className="footer__contacts">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="footer__contact-link"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="footer__divider" />

          {/* Copyright */}
          <p className="footer__copy">
            © 2026 Ronald Lipski Roderjan
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
