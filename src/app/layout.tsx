import { Providers } from '@/providers'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Logan Liffick',
  description:
    'Logan Liffick is a design engineer building brands, systems, and products.',
  icons: { icon: '/favicon.svg' },
  openGraph: { images: 'https://www.loganliffick.com/og.jpg' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`bg-base-200 ${inter.className} text-300 antialiased transition-colors selection:bg-blue-600 selection:text-white dark:bg-neutral-950 dark:text-neutral-100`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
