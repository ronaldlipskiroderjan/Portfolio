import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import './Skills.css'

const hardSkills = [
  { name: 'Java', emoji: '☕', color: '#ff0000' },
  { name: 'Golang', emoji: '🐹', color: '#00ddff' },
  { name: 'Python', emoji: '🐍', color: '#00ffbb' },
  { name: 'Spring Boot', emoji: '🍃', color: '#22c55e' },
  { name: 'Spring Security', emoji: '🔒', color: '#22c55e' },
  { name: 'Spring Data JPA', emoji: '🗄️', color: '#22c55e' },
  { name: 'API REST', emoji: '🔗', color: '#aac522' },
  { name: 'JUnit', emoji: '🧪', color: '#f62303' },
  { name: 'SQL -> (PostgreSQL & MySQL)', emoji: '🐘', color: '#60a5fa' },
  { name: 'Git & GitHub', emoji: '🔧', color: '#7176f8' },
  { name: 'Redes', emoji: '🌐', color: '#7176f8' },
  { name: 'Linux', emoji: '🐧', color: '#1136a6' },
  { name: 'Modelagem de Software', emoji: '🧩 ', color: '#0ded0d' },
  { name: 'Desing de Sistemas', emoji: '📐 ', color: '#0ded0d' },
]

const courses = [ 
  'Maratona Java Virado no Jiraya -> Curso de Java',
  'Curso de Spring Boot, Spring Security e Spring Data JPA (Souza DEV)',
  'Trilha de Analista de Requisitos',
  'Trilha de Desenvolvedor de Sistemas Computacionais',
  'Trilha de Desenvolvedor Web',
  'Arquitetura de Banco de Dados',
  'Inglês (Cultura Inglesa)',
  'Fundamentos da IA Moderna (DIO)'
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
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-label">💡 Conhecimento</span>
          <h2 className="section-title">Habilidades & Cursos</h2>
          <p className="section-subtitle">
            Tecnologias que domino e trilhas de aprendizado que percorri.
          </p>
        </motion.div>

        <div className="skills-grid">
          {/* Hard Skills */}
          <div>
            <motion.h3
              className="skills-col-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Habilidades Técnicas
            </motion.h3>
            <div className="chips-container">
              {hardSkills.map((skill, i) => (
                <motion.span
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
                </motion.span>
              ))}
            </div>
          </div>

          {/* Cursos */}
          <div>
            <motion.h3
              className="skills-col-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Cursos Extras
            </motion.h3>
            <ul className="courses-list">
              {courses.map((course, i) => (
                <motion.li
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
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
