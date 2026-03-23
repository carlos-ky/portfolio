import styles from './Skills.module.css'

const skills = [
  {
    icon: '⚛️',
    name: 'Frontend',
    desc: 'Interfaces réactives, performantes et accessibles. Du composant à l\'application complète.',
    tags: ['React.js', 'Next.js', 'React Native', 'HTML/CSS', 'JavaScript']
  },
  {
    icon: '⚙️',
    name: 'Backend',
    desc: 'APIs robustes, logique métier solide, authentification et sécurité.',
    tags: ['Node.js', 'Express.js', 'REST API', 'JWT', 'Middleware']
  },
  {
    icon: '🗄️',
    name: 'Base de données',
    desc: 'Modélisation, requêtes optimisées, migrations et intégrité des données.',
    tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL']
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
