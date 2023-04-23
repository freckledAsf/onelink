import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Linktree de Victor Tamayo',
  description: 'Una coleccion de enlaces con vias de contacto e informacion relevante sobre Victor Tamayo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className='overflow-x-hidden'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
