import { Footer } from '@/components/Footer'
import { Providers } from '@/providers'
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

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
      className={`bg-neutral-50 ${geist.className} text-300 antialiased transition-colors selection:bg-neutral-300/50 dark:bg-neutral-950 dark:text-neutral-100`}
    >
      <body className="flex min-h-screen flex-col">
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
