'use client'

import { ArrowLeft } from '@phosphor-icons/react'
import Link from 'next/link'

export const BackButton = () => {
  return (
    <div className="sticky top-8 sm:h-0">
      <Link
        className="scaleFade border-base-border bg-base-100 text-base-medium absolute -top-0.5 right-0 flex items-center justify-center rounded-full border px-3 py-1 text-sm shadow-xs md:-left-14 md:size-9 md:p-0"
        style={{ animationDelay: '500ms' }}
        href={'/'}
      >
        <ArrowLeft weight="bold" size={16} />
        {/* Back */}
      </Link>
    </div>
  )
}
