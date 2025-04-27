'use client'

import { ArrowLeft } from '@phosphor-icons/react'
import Link from 'next/link'

export const BackButton = () => {
  return (
    <div className="sticky top-8 z-50 sm:h-0">
      <Link
        className="reveal reveal-sm border-base-border bg-base-100 text-base-medium add-focus absolute -top-0.5 right-0 flex items-center justify-center gap-1 rounded-full border py-1 pr-3 pl-2.5 text-sm shadow-xs transition-transform md:-left-14 md:size-9 md:p-0 md:hover:scale-90"
        style={{ animationDelay: '150ms' }}
        href={'/'}
      >
        <ArrowLeft weight="bold" size={16} />
        <span className="block font-medium select-none md:hidden">Back</span>
      </Link>
    </div>
  )
}
