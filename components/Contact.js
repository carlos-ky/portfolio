import styles from './Contact.module.css'

const links = [
  {
    icon: '✉',
    label: 'Email',
    value: 'eliecarlosk@gmail.com',
    href: 'mailto:eliecarlosk@gmail.com'
  },
  {
    icon: '⌥',
    label: 'GitHub',
    value: 'kingloscar',
    href: 'https://github.com/carlos-ky'
  },
  {
    icon: '☎',
    label: 'Téléphone',
    value: '+226 54 71 48 40',
    href: 'tel:+22654714840'
  }
]

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="reveal">
        <div className="section-tag">Contact</div>
        <h2 className={styles.big}>
          Travaillons<br />
          <em>ensemble.</em>
        </h2>
        <p className={styles.sub}>
          Ouvert aux opportunités Frontend (Web & Mobile) 
          à Ouagadougou — présentiel, hybride ou remote. Réponse sous 24h.
        </p>
        <a href="mailto:eliecarlosk@gmail.com" className="btn-primary">
          <span>Envoyer un email</span>
        </a>
      </div>

      <div className={`${styles.links} reveal`}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={styles.link}
          >
            <div className={styles.linkIcon}>{link.icon}</div>
            <div className={styles.linkInfo}>
              <div className={styles.linkLabel}>{link.label}</div>
              <div className={styles.linkValue}>{link.value}</div>
            </div>
            <span>↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
