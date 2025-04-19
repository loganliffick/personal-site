'use client'

import { ArrowLeft } from '@phosphor-icons/react'
import Link from 'next/link'

export const BackButton = () => {
  return (
    <div className="sticky top-8 sm:h-0">
      <Link
        className="scaleFade absolute -top-0.5 right-0 flex items-center justify-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700 shadow-xs md:-left-12 md:size-8 md:p-0"
        style={{ animationDelay: '500ms' }}
        href={'/'}
      >
        <ArrowLeft weight="bold" size={16} />
        Back
      </Link>
    </div>
  )
}
