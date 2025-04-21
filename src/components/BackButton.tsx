'use client'

import { ArrowLeft } from '@phosphor-icons/react'
import Link from 'next/link'

export const BackButton = () => {
  return (
    <div className="sticky top-8 sm:h-0">
      <Link
        className="scaleFade border-base-border bg-base-100 text-base-medium *:ease-bounce absolute -top-0.5 right-0 flex items-center justify-center gap-1 overflow-hidden rounded-full border px-3 py-1 text-sm shadow-xs *:transition-transform *:duration-400 md:-left-14 md:size-9 md:p-0 md:transition-all md:hover:scale-110"
        style={{ animationDelay: '500ms' }}
        href={'/'}
      >
        <ArrowLeft className="" weight="bold" size={16} />
        <span className="block font-medium md:hidden">Back</span>
      </Link>
    </div>
  )
}
