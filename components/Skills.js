import styles from './Skills.module.css'

const skills = [
  {
    icon: '⚛️',
    name: 'Frontend',
    desc: 'Interfaces réactives, performantes et accessibles. Du composant à l\'application complète.',
    tags: ['React.js', 'Next.js','Vue.js 3', 'React Native', 'TypeScript', 'Tailwind CSS']
  },
  {
    icon: '🗄️',
    name: 'Mobile',
    desc: 'Applications mobiles cross-platform avec React Native et Expo. Pensées pour la performance et l\'expérience utilisateur.',
    tags: ['React Native', 'Expo', 'Javascript', 'AsyncStorage']
  },
  {
    icon: '⚙️',
    name: 'Intégration & Outils',
    desc: 'Connexion à des services backend modernes, consommation d\'APIs, versioning et déploiement continu',
    tags: ['REST APIs','Supabase','Git', 'Vercel', 'Tailwind CSS']
  }
]

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={`${styles.header} reveal`}>
        <div>
          <div className="section-tag">Compétences</div>
          <h2 className="section-title">Ce que<br />je maîtrise.</h2>
        </div>
      </div>

      <div className={styles.grid}>
        {skills.map((skill) => (
          <div key={skill.name} className={`${styles.card} reveal`}>
            <div className={styles.icon}>{skill.icon}</div>
            <div className={styles.name}>{skill.name}</div>
            <p className={styles.desc}>{skill.desc}</p>
            <div className={styles.tags}>
              {skill.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
