import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Logan Liffick',
  description:
    'Logan Liffick is a design engineer building brands, systems, and products.',
  openGraph: {
    title: 'Logan Liffick',
    description:
      'Logan Liffick is a design engineer building brands, systems, and products.',
    url: 'https://loganliffick.com',
    siteName: 'Logan Liffick',
    images: [
      {
        url: 'https://loganliffick.com/og.jpg',
        alt: '© logan_liffick',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@logan_liffick',
    creator: '@logan_liffick',
    images: [
      {
        url: 'https://loganliffick.com/og.jpg',
        alt: '© logan_liffick',
      },
    ],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`bg-base-bg ${inter.variable} text-base-strong selection:bg-base-selection/50 antialiased transition-colors`}
    >
      <body className="flex min-h-screen flex-col">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
