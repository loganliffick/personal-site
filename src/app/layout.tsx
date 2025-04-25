import { Footer } from '@/components/Footer'
import { Providers } from '@/providers'
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

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
      className={`bg-base-bg ${geistSans.variable} text-base-1000 selection:bg-base-selection/50 antialiased transition-colors`}
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
