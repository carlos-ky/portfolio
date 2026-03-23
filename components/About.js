import styles from './About.module.css'

export default function About() {
  const stack = [
    'React.js', 'Node.js', 'React Native', 'Express.js',
    'PostgreSQL', 'MySQL', 'REST APIs', 'Git / GitHub',
    'Vercel', 'JWT / Auth'
  ]

  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.text} reveal`}>
        <div className="section-tag">À propos</div>
        <h2 className="section-title">Construire,<br />pas juste coder.</h2>
        <p>
          Je suis <strong>Elie Carlos KY</strong>, développeur React & Node.js basé à Ouagadougou.
          Mon parcours combine une formation technique solide en ingénierie informatique et une
          expérience terrain en développement, supervision de systèmes et gestion de projets digitaux.
        </p>
        <p>
          J&apos;ai co-fondé et dirigé <strong>Digiflex</strong>, une agence de marketing digital —
          ce qui m&apos;a appris à livrer des produits complets, pas seulement du code propre.
          Je comprends le business derrière la technique.
        </p>
        <p>
          Aujourd&apos;hui je cherche un environnement où <strong>l&apos;excellence technique</strong> rencontre
          une <strong>vision produit ambitieuse</strong>.
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
