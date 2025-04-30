import { IconArrowLeft } from '@/components/Icons'
import Link from 'next/link'

export const BackButton = () => {
  return (
    <div className="sticky top-8 z-50 sm:h-0">
      <Link
        className="fade border-base-border bg-base-bg-depth text-base-strong add-focus absolute -top-0.5 right-0 flex items-center justify-center gap-1.5 rounded-full border py-1 pr-3 pl-2.5 text-sm shadow-xs transition-transform md:-left-14 md:size-8 md:p-0 md:hover:scale-95"
        style={{ animationDelay: '500ms' }}
        href={'/'}
      >
        <IconArrowLeft className="size-4" />
        <span className="block select-none md:hidden">Back</span>
      </Link>
    </div>
  )
}
