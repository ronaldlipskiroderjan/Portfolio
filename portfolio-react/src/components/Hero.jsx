import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Linkedin, Github } from 'lucide-react'
import './Hero.css'

const ROLES = [
  'Desenvolvedor Backend',
  'Estudante de Eng. de Software',
  'Entusiasta de Java & Spring',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const current = ROLES[roleIndex]
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }
    return () => clearTimeout(timeoutRef.current)
  }, [displayed, deleting, roleIndex])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="home" className="hero">
      {/* Glow orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      <div className="container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Nome */}
          <motion.h1 className="hero__name" variants={itemVariants}>
            Ronald Lipski
            <br />
            <span className="gradient-text">Roderjan</span>
          </motion.h1>

          {/* Typing effect */}
          <motion.div className="hero__role" variants={itemVariants}>
            <span>{displayed}</span>
            <span className="hero__cursor">|</span>
          </motion.div>

          {/* Descrição */}
          <motion.p className="hero__desc" variants={itemVariants}>
            Em busca de oportunidade de <strong>estágio em TI</strong>.
          </motion.p>

          {/* CTA */}
          <motion.div className="hero__btns" variants={itemVariants}>
            <a href="#projetos" className="btn btn-primary" onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Ver Projetos
            </a>
            <a
              href="https://www.linkedin.com/in/ronald-lipski-roderjan-352476368"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>
            <a
              href="https://github.com/ronaldlipskiroderjan"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <Github size={17} />
              GitHub
            </a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            className="hero__scroll"
            variants={itemVariants}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
