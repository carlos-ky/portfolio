import styles from './Projects.module.css'

const projects = [
  
  {
    num: '01',
    status: 'Live',
    live: true,
    title: 'Dashboard Analytics — Gestion de contenu',
    desc: 'Dashboard fullstack de gestion de contenu connecté à Supabase. Authentification, gestion d\'articles, suivi de projets, analytics de visites, système de messagerie interne. Architecture multi-utilisateurs avec rôles différenciés.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/carlos-ky/analytics-dashboard.git',
    demo: 'https://analytics-dashboard-one-tau.vercel.app/'
  },
  {
    num: '02',
    status: 'En cours',
    live: false,
    title: 'SpendTracker — App mobile de gestion de dépenses',
    desc: 'pplication mobile React Native pour suivre ses dépenses personnelles. Catégorisation, statistiques mensuelles, synchronisation cloud via Supabase, interface fluide. Déployée en Expo Web pour démonstration.',
    stack: ['React Native', 'Expo', 'TypeSript', 'Supabase'],
    github: 'https://github.com/carlos-ky',
    demo: null
  },
  {
    num: '03',
    status: 'En cours',
    live: false,
    title: ' MovieFinder — Recherche et exploration',
    desc: 'Application web de recherche et d\'exploration de films et séries, connectée à l\'API TMDB. Recherche en temps réel, fiches détaillées, listes de favoris, interface responsive inspirée des plateformes de streaming.',
    stack: ['Vue JS 3', 'TypeScript', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/carlos-ky',
    demo: null
  },
  {
    num: '04',
    status: 'En cours',
    live: false,
    title: 'AB ENERGIE — Cas d\'étude conceptuel',
    desc: 'Refonte conceptuelle d\'un site web pour une entreprise du secteur énergie au Burkina Faso. Projet réalisé en démarche de prospection — exercice complet de conception, design et développement front-end pour démontrer ma capacité à traiter un brief sectoriel de bout en bout. Le site n\'a pas été commandité par AB ENERGIE.',
    stack: ['Next.js', 'CSS Modules', 'Vercel'],
    github: 'https://github.com/carlos-ky',
    demo: null
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
