import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid} />
      <div className={styles.glow} />

      <div className={styles.content}>
        <div className={styles.tag}>Disponible · Ouagadougou, Burkina Faso</div>
        <h1 className={styles.name}>
          Carlos<br />
          <span className={styles.outline}>KY</span>
        </h1>
        <div className={styles.title}>React & Node.js Developer</div>
        <p className={styles.desc}>
          Je construis des applications web et mobile robustes, des APIs performantes,
          et des interfaces qui convertissent. Fullstack, pragmatique, orienté résultats.
        </p>
        <div className={styles.cta}>
          <a href="#projects" className="btn-primary">
            <span>Voir mes projets</span>
          </a>
          <a href="#contact" className="btn-outline">Me contacter</a>
        </div>
      </div>

      <div className={styles.counter}>
        <div className={styles.counterItem}>
          <div className={styles.counterNum}>3+</div>
          <div className={styles.counterLabel}>Années d&apos;exp.</div>
        </div>
        <div className={styles.counterItem}>
          <div className={styles.counterNum}>10+</div>
          <div className={styles.counterLabel}>Projets livrés</div>
        </div>
        <div className={styles.counterItem}>
          <div className={styles.counterNum}>2</div>
          <div className={styles.counterLabel}>Spécialités</div>
        </div>
      </div>

      <div className={styles.scroll}>Scroll</div>
    </section>
  )
}
