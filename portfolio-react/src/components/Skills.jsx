import { motion as Motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import './Skills.css'

const hardSkills = [
  { name: "Java", emoji: "☕", color: "#60a5fa" },
  { name: "Spring Boot", emoji: "🍃", color: "#3b82f6" },
  { name: "Spring Security", emoji: "🔒", color: "#3b82f6" },
  { name: "Spring Data JPA", emoji: "🗄️", color: "#3b82f6" },
  { name: "APIs REST", emoji: "🔗", color: "#2563eb" },
  { name: "JUnit", emoji: "🧪", color: "#818cf8" },
  { name: "PostgreSQL & MySQL", emoji: "🐘", color: "#60a5fa" },
  { name: "Go", emoji: "🐹", color: "#38bdf8" },
  { name: "Python", emoji: "🐍", color: "#22d3ee" },
  { name: "Git & GitHub", emoji: "🔧", color: "#7176f8" },
  { name: "Linux", emoji: "🐧", color: "#1136a6" },
  { name: "Modelagem de Software", emoji: "🧩", color: "#06b6d4" },
  { name: "Design de Sistemas", emoji: "📐", color: "#06b6d4" },
  { name: "Redes", emoji: "🌐", color: "#7176f8" },
]

const courses = [
  "Maratona Java Virado no Jiraya — Curso de Java",
  "Spring Boot, Spring Security e Spring Data JPA — Souza DEV",
  "Trilha de Analista de Requisitos",
  "Trilha de Desenvolvedor de Sistemas Computacionais",
  "Trilha de Desenvolvedor Web",
  "Arquitetura de Banco de Dados",
  "Inglês — Cultura Inglesa",
  "Fundamentos da IA Moderna — DIO",
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-label">03 · conhecimento</span>
          <h2 className="section-title">Habilidades & Cursos</h2>
          <p className="section-subtitle">
            Tecnologias que aplico nos projetos e formações que sustentam minha evolução como desenvolvedor.
          </p>
        </Motion.div>

        <div className="skills-grid">
          {/* Hard Skills */}
          <div>
            <Motion.h3
              className="skills-col-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Habilidades Técnicas
            </Motion.h3>
            <div className="chips-container">
              {hardSkills.map((skill, i) => (
                <Motion.span
                  key={skill.name}
                  className="skill-chip"
                  style={{ '--chip-color': skill.color }}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  whileHover={{ y: -3, scale: 1.03 }}
                >
                  <span className="skill-chip__emoji">{skill.emoji}</span>
                  {skill.name}
                </Motion.span>
              ))}
            </div>
          </div>

          {/* Cursos */}
          <div>
            <Motion.h3
              className="skills-col-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Cursos Extras
            </Motion.h3>
            <ul className="courses-list">
              {courses.map((course, i) => (
                <Motion.li
                  key={course}
                  className="course-item"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  <CheckCircle size={16} className="course-item__icon" />
                  <span>{course}</span>
                </Motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
