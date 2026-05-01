import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space'
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm'
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: 'Studio Créatif | Design Digital & Direction Artistique',
  description: 'Direction artistique, création de contenus, design web, templates et expériences digitales uniques.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
