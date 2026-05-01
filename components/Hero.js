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
        <div className={styles.title}>Frontend Developer · React, Vue.js & React Native</div>
        <p className={styles.desc}>
          Je construis des interfaces web et mobile soignées, performantes et orientées conversion. 
          React, Vue.js, React Native, intégration d'APIs et de services backend modernes.
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
          <div className={styles.counterNum}>1+</div>
          <div className={styles.counterLabel}>Années d&apos;exp.</div>
        </div>
        <div className={styles.counterItem}>
          <div className={styles.counterNum}>4+</div>
          <div className={styles.counterLabel}>Projets phares</div>
        </div>
        <div className={styles.counterItem}>
          <div className={styles.counterNum}>3</div>
          <div className={styles.counterLabel}>Spécialités</div>
        </div>
      </div>

      <div className={styles.scroll}>Scroll</div>
    </section>
  )
}
