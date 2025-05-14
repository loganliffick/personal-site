'use client'

import { IconClipboard } from '@/components/Icons'
import { TextLink } from '@/components/TextLink'
import { cn } from '@/utils/tw'
import { useState } from 'react'

export const EmailButton = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copyText = () => {
    const text = 'hello@loganliffick.com'
    navigator.clipboard
      .writeText(text)
      .then(() => setIsCopied(true))
      .catch((err) => console.log(err))
  }

  return (
    <div className="relative">
      <div className="absolute -top-10 -left-1/2 -translate-x-1/2 sm:left-1/2">
        <div
          className={cn(
            'bg-base-bg-depth text-base-strong border-base-border reveal-xs hidden w-max shrink-0 items-center gap-1.5 rounded-lg border py-1.5 pr-3 pl-2.5 shadow-xs',
            { 'reveal flex': isCopied },
          )}
          onAnimationEnd={() =>
            setTimeout(() => {
              setIsCopied(false)
            }, 1000)
          }
        >
          <IconClipboard className="size-4" />
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
  )
}
