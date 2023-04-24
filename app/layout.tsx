import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Linktree de Victor Tamayo',
  description: 'Una coleccion de enlaces con vias de contacto e informacion relevante sobre Victor Tamayo',
  icons: {
    icon: 'favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
