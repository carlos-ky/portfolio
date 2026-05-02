import styles from './About.module.css'

export default function About() {
  const stack = [
    'Vue.js 3','React.js','Next.js', 'React Native', 'Tailwind CSS','REST APIs','Supabase', 'Git / GitHub',
    'Vercel', 'Expo'
  ]

  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.text} reveal`}>
        <div className="section-tag">À propos</div>
        <h2 className="section-title">Construire,<br />pas juste coder.</h2>
        <p>
          Je suis <strong>Elie Carlos KY</strong>, développeur Frontend basé à Ouagadougou, 
          spécialisé en React et Vue.js.
          Mon parcours combine une formation en ingénierie informatique (Bac+2), une expérience 
          terrain en développement sur des projets Vue.js 3 chez ECODEV, et plusieurs 
          missions freelance en React et mobile depuis."
        </p>
        <p>
          J'ai accompagné des projets web de bout en bout — conception d'interfaces, intégration d'APIs 
          et de services backend (Supabase, REST APIs tierces), déploiement. Aujourd'hui, je cherche à 
          intégrer une équipe expérimentée pour apprendre des seniors et progresser sur 
          des projets ambitieux.
        </p>
        <p>
          <strong>Je code, je livre, et je veux progresser.</strong>.
        </p>
      </div>

      <div className={`${styles.visual} reveal`}>
        <div className={styles.card}>
          <div className="section-tag" style={{ marginBottom: '16px' }}>Stack principal</div>
          <div className={styles.stackList}>
            {stack.map((item) => (
              <div key={item} className={styles.stackItem}>
                <span className={styles.arrow}>▸</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
