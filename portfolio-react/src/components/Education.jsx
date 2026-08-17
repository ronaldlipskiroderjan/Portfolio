import { motion } from 'framer-motion'
import { GraduationCap, CalendarDays, MapPin } from 'lucide-react'
import './Education.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Education() {
  return (
    <section id="formacao">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-label">🎓 Trajetória</span>
          <h2 className="section-title">Formação Acadêmica</h2>
        </motion.div>

        <motion.div
          className="education-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={1}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
        >
          <div className="education-card__accent" />

          <div className="education-card__body">
            <div className="education-card__icon">
              <GraduationCap size={28} />
            </div>

            <div className="education-card__info">
              <div className="education-card__top">
                <div>
                  <h3 className="education-card__degree">Bacharelado em Engenharia de Software</h3>
                  <p className="education-card__institution">
                    Pontifícia Universidade Católica do Paraná (PUCPR)
                  </p>
                </div>
                <span className="badge badge-purple">Cursando 4º Período</span>
              </div>

              <div className="education-card__meta">
                <span className="education-meta-item">
                  <CalendarDays size={14} />
                  Previsão de conclusão: 2º semestre de 2029
                </span>
                <span className="education-meta-item">
                  <MapPin size={14} />
                  Curitiba, PR
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
