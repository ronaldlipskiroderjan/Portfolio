import { motion } from 'framer-motion'
import { Github, ExternalLink, Clock, CheckCircle2 } from 'lucide-react'
import './Projects.css'

const projects = [
  {
    id: 'zenk',
    emoji: '🛒',
    title: 'Zenk',
    status: 'Em Desenvolvimento',
    statusType: 'wip',
    description:
      'API REST para e-commerce que reúne autenticação e autorização com JWT, cadastro de usuários e a modelagem completa de produtos, categorias, pedidos, pagamentos, endereços, fretes e transportadoras.',
    highlights: [
      { emoji: '☕', label: 'Java 21 & Spring Boot' },
      { emoji: '🔐', label: 'Spring Security & JWT' },
      { emoji: '🐘', label: 'PostgreSQL' },
      { emoji: '🍃', label: 'Spring Data JPA' },
    ],
    github: 'https://github.com/ronaldlipskiroderjan/E-Commerce-ZENK',
    demo: null,
  },
  {
    id: 'kart-finance',
    emoji: '🏎️',
    title: 'Kart Finance',
    status: 'Em Desenvolvimento',
    statusType: 'wip',
    description:
      'Aplicação full stack de gestão financeira para equipes de kart, com controle de pilotos, despesas, reembolsos, fechamentos mensais, cobranças de corridas e caixa de viagem.',
    highlights: [
      { emoji: '🐹', label: 'Go, Fiber & GORM' },
      { emoji: '⚛️', label: 'React & Vite' },
      { emoji: '🐘', label: 'PostgreSQL' },
      { emoji: '🛡️', label: 'Sessão HttpOnly & CSRF' },
    ],
    github: 'https://github.com/ronaldlipskiroderjan/Kart-Finance',
    demo: null,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Projects() {
  return (
    <section id="projetos">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-label">🚀 Portfólio</span>
          <h2 className="section-title">Projetos em Destaque</h2>
          <p className="section-subtitle">
            Projetos que desenvolvi para consolidar meus conhecimentos técnicos e resolver problemas reais.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              {/* Card header */}
              <div className="project-card__header">
                <div className="project-card__title-row">
                  <span className="project-card__emoji">{project.emoji}</span>
                  <h3 className="project-card__title">{project.title}</h3>
                </div>

                <span className={`badge ${project.statusType === 'done' ? 'badge-green' : 'badge-purple'}`}>
                  {project.statusType === 'done'
                    ? <CheckCircle2 size={12} />
                    : <Clock size={12} />
                  }
                  {project.status}
                </span>
              </div>

              {/* Descrição */}
              <p className="project-card__desc">{project.description}</p>

              {/* Highlights */}
              <div className="project-card__highlights">
                <p className="project-card__highlights-label">Stack Técnica</p>
                <div className="project-card__tags">
                  {project.highlights.map((h) => (
                    <span key={h.label} className="project-tag">
                      <span>{h.emoji}</span>
                      {h.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer links */}
              <div className="project-card__footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card__link"
                >
                  <Github size={16} />
                  Ver Código
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link project-card__link--demo"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
