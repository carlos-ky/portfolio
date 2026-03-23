import styles from './Projects.module.css'

const projects = [
  {
    num: '01',
    status: 'En cours',
    live: false,
    title: 'Maison Sergio — E-Commerce',
    desc: 'Plateforme e-commerce complète pour une boutique de mode féminine. Catalogue produits, panier, gestion des commandes et dashboard admin.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    github: 'https://github.com/carlos-ky',
    demo: null
  },
  {
    num: '02',
    status: 'En cours',
    live: false,
    title: 'TaskFlow — Gestion de tâches',
    desc: 'Application de gestion de tâches en temps réel avec collaboration multi-utilisateurs, notifications et tableau Kanban interactif.',
    stack: ['React', 'Node.js', 'WebSockets', 'PostgreSQL'],
    github: 'https://github.com/carlos-ky',
    demo: null
  },
  {
    num: '03',
    status: 'En cours',
    live: false,
    title: 'Analytics Dashboard',
    desc: 'Dashboard de visualisation de données avec graphiques dynamiques, filtres avancés et export de rapports. API REST complète.',
    stack: ['React', 'Chart.js', 'Node.js', 'MySQL'],
    github: 'https://github.com/carlos-ky',
    demo: null
  },
  {
    num: '04',
    status: 'Live',
    live: true,
    title: 'Portfolio — Ce site',
    desc: 'Portfolio personnel conçu et développé from scratch. Design premium, animations CSS, responsive et optimisé pour les performances.',
    stack: ['Next.js', 'CSS Modules', 'Vercel'],
    github: 'https://github.com/carlos-ky',
    demo: 'https://portfolio-flame-chi-66.vercel.app/'
  }
]

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={`${styles.header} reveal`}>
        <div className="section-tag">Projets</div>
        <h2 className="section-title">Ce que j&apos;ai<br />construit.</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.num} className={`${styles.card} reveal`}>
            <div className={styles.num}>{project.num}</div>
            <div className={`${styles.status} ${project.live ? styles.live : styles.soon}`}>
              {project.status}
            </div>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.desc}>{project.desc}</p>
            <div className={styles.stack}>
              {project.stack.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div className={styles.links}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                ↗ GitHub
              </a>
              {project.demo ? (
                <a href={project.demo} className={styles.link}>↗ Live Demo</a>
              ) : (
                <span className={`${styles.link} ${styles.disabled}`}>↗ Live Demo</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
