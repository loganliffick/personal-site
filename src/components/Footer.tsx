'use client'

import { TextLink } from '@/components/TextLink'
import { cn } from '@/utils/tw'
import { Clipboard } from '@phosphor-icons/react'
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
    <footer className="flex w-full items-center justify-center px-6 py-10">
      <div className="text-base-soft flex w-full max-w-2xl flex-wrap-reverse items-center justify-between text-sm">
        <p className="select-none">© {currentYear}</p>
        <nav className="-mr-3 flex gap-0.5">
          <TextLink
            className="px-3 py-1.5"
            external
            href="https://x.com/logan_liffick"
            title="X"
          />
          <TextLink
            className="px-3 py-1.5"
            external
            href="https://github.com/loganliffick"
            title="Github"
          />
          <div className="relative">
            <div className="absolute -top-10 -left-1/2 -translate-x-1/2 sm:left-1/2">
              <div
                className={cn(
                  'bg-base-bg-depth border-base-border reveal reveal-xs hidden w-max shrink-0 items-center gap-1.5 rounded-lg border py-1.5 pr-3 pl-2.5 shadow-xs',
                  { 'fade flex': isCopied },
                )}
                onAnimationEnd={() =>
                  setTimeout(() => {
                    setIsCopied(false)
                  }, 1000)
                }
              >
                <Clipboard />
                <p>Copied to clipboard</p>
              </div>
            </div>
            <TextLink
              as={'button'}
              className="px-3 py-1.5"
              onClick={() => copyText()}
              title="Email"
            />
          </div>
        </nav>
      </div>
    </footer>
  )
}
