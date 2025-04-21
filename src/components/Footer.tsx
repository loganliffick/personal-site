'use client'

import { ButtonLink } from '@/components/ButtonLink'
import Link from 'next/link'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex w-full items-center justify-center bg-red-200/0 px-6 pt-40 pb-12">
      <div className="flex w-full max-w-xl items-center justify-between text-sm">
        <p className="text-base-soft select-none">© {currentYear}</p>
        <nav className="flex gap-0.5">
          <ButtonLink
            as={Link}
            external
            href="https://x.com/logan_liffick"
            title="X"
          />
          <ButtonLink
            as={Link}
            external
            href="https://github.com/loganliffick"
            title="Github"
          />
          <ButtonLink
            as={'button'}
            title="Email"
            onClick={() => console.log('Here')}
          />
        </nav>
      </div>
    </footer>
  )
}
