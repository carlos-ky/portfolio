import './globals.css'

export const metadata = {
  title: 'Carlos KY — Frontend Developer · React, Vue & React Native',
  description: 'Développeur React & Node.js basé à Ouagadougou, Burkina Faso. Fullstack, pragmatique, orienté résultats.',
  keywords: ['React', 'Node.js', 'Developer', 'Fullstack', 'Ouagadougou', 'Burkina Faso'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
