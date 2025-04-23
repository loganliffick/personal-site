'use client'

import { ButtonLink } from '@/components/ButtonLink'
import { cn } from '@/utils/tw'
import { Clipboard } from '@phosphor-icons/react'
import Link from 'next/link'
import { useState } from 'react'

export const Footer = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copyText = () => {
    const text = 'hello@loganliffick.com'
    navigator.clipboard
      .writeText(text)
      .then(() => setIsCopied(true))
      .catch((err) => console.log(err))
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex w-full items-center justify-center bg-red-200/0 px-6 py-10 md:pt-40">
      <div className="flex w-full max-w-xl flex-wrap-reverse items-center justify-between text-sm">
        <p className="text-base-soft select-none">© {currentYear}</p>
        <nav className="-mr-1.5 flex gap-0.5">
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
          <div className="relative">
            <div className="absolute -top-10 -left-1/2 -translate-x-1/2 sm:left-1/2">
              <div
                className={cn(
                  'bg-base-100 border-base-border set-fade fade-sm hidden w-max shrink-0 items-center gap-1.5 rounded-lg border py-1.5 pr-3 pl-2.5 shadow-xs',
                  { 'fade flex': isCopied },
                )}
                onAnimationEnd={() =>
                  setTimeout(() => {
                    setIsCopied(false)
                  }, 1000)
                }
              >
                <Clipboard weight="bold" />
                <p className="font-medium">Copied to clipboard</p>
              </div>
            </div>
            <ButtonLink
              as={'button'}
              title="Email"
              onClick={() => copyText()}
            />
          </div>
        </nav>
      </div>
    </footer>
  )
}
