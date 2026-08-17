import { useEffect, useState, useRef } from "react"
import { motion as Motion } from "framer-motion"
import { ArrowRight, Linkedin, Mail, Coffee, Leaf, Server, MapPin } from "lucide-react"
import "./Hero.css"

const ROLES = [
  "Desenvolvedor Backend",
  "Estudante de Eng. de Software",
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
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
    } else {
      timeoutRef.current = setTimeout(() => {
        setDeleting(false)
        setRoleIndex((index) => (index + 1) % ROLES.length)
      }, 35)
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
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      <div className="container hero__layout">
        <Motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Motion.div className="hero__eyebrow" variants={itemVariants}>
            <Coffee size={17} />
            <span>Java Spring Boot</span>
          </Motion.div>

          <Motion.h1 className="hero__name" variants={itemVariants}>
            Ronald Lipski
            <br />
            <span className="gradient-text">Roderjan.</span>
          </Motion.h1>

          <Motion.div className="hero__role" variants={itemVariants}>
            <span className="hero__prompt">$</span>
            <span>{displayed}</span>
            <span className="hero__cursor">_</span>
          </Motion.div>

          <Motion.div className="hero__meta" variants={itemVariants}>
            <span className="hero__availability">
              <span className="hero__availability-dot" />
              Disponível para estágio
            </span>
            <span className="hero__location"><MapPin size={15} /> Curitiba, PR</span>
          </Motion.div>

          <Motion.div className="hero__btns" variants={itemVariants}>
            <a href="#projetos" className="btn btn-primary" onClick={(event) => {
              event.preventDefault()
              document.querySelector("#projetos")?.scrollIntoView({ behavior: "smooth" })
            }}>
              Ver projetos
              <ArrowRight size={16} />
            </a>
            <a href="mailto:ronaldlipski1@gmail.com" className="btn btn-secondary">
              <Mail size={17} />
              Falar comigo
            </a>
            <a
              href="https://www.linkedin.com/in/ronald-lipski-roderjan-352476368"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
              aria-label="Acessar LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </Motion.div>
        </Motion.div>

        <Motion.aside
          className="hero__code-card"
          initial={{ opacity: 0, x: 36, rotateY: -5 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Código Java com Spring Boot"
        >
          <div className="code-card__bar">
            <div className="code-card__dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="code-card__filename">PortfolioApplication.java</span>
            <Coffee size={15} />
          </div>

          <div className="code-card__body" aria-hidden="true">
            <div><span className="code-line">01</span><span className="code-annotation">@SpringBootApplication</span></div>
            <div><span className="code-line">02</span><span className="code-keyword">public class</span> <span className="code-class">Portfolio</span> {"{"}</div>
            <div><span className="code-line">03</span></div>
            <div><span className="code-line">04</span>&nbsp;&nbsp;<span className="code-keyword">private final</span> Developer developer;</div>
            <div><span className="code-line">05</span></div>
            <div><span className="code-line">06</span>&nbsp;&nbsp;<span className="code-annotation">@GetMapping</span>(<span className="code-string">"/projects"</span>)</div>
            <div><span className="code-line">07</span>&nbsp;&nbsp;<span className="code-keyword">public</span> List&lt;Project&gt; build() {"{"}</div>
            <div><span className="code-line">08</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">return</span> developer.create();</div>
            <div><span className="code-line">09</span>&nbsp;&nbsp;{"}"}</div>
            <div><span className="code-line">10</span>{"}"}</div>
          </div>

          <div className="code-card__status">
            <span><Leaf size={14} /> Spring ready</span>
            <span><Server size={14} /> :8080</span>
          </div>
        </Motion.aside>
      </div>
    </section>
  )
}
