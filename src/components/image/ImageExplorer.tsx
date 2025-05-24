'use client'

import { IconShoppingBag } from '@/components/Icons'
import { cn } from '@/utils/tw'
import Link from 'next/link'
import { useState } from 'react'

const PointOfInterest = (props: {
  active: boolean
  posX: number
  posY: number
  text: string
  link?: string
  delay?: number
}) => (
  <button
    className={cn('group add-focus set-scaleFade absolute rounded-full', {
      'scaleFade hover:z-100': props.active,
    })}
    onClick={(e) => e.currentTarget.blur()}
    style={{
      left: `${props.posX}px`,
      top: `${props.posY}px`,
      animationDelay: `${props.delay ?? 0}ms`,
    }}
  >
    <span className="block size-4 origin-center rounded-full bg-white transition-transform after:absolute after:top-0 after:left-0 after:size-full after:animate-ping after:rounded-full after:bg-white after:transition-opacity group-focus-within:after:opacity-0 group-hover:after:opacity-0 group-focus:after:opacity-0" />

    <span
      className={cn(
        'bg-base-bg-depth border-base-border pointer-events-none absolute bottom-6 left-1/2 z-50 flex w-max -translate-x-1/2 translate-y-1 items-center gap-3 rounded-lg border px-3 py-2 text-sm opacity-0 shadow-xs transition-all duration-150 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 before:absolute before:top-8 before:left-0 before:hidden before:size-full before:bg-transparent group-hover:before:block has-focus-within:translate-y-0 has-focus-within:opacity-100',
        { 'py-1 pr-1 pl-3': props.link },
      )}
    >
      <span className="z-10 cursor-text">{props.text}</span>
      {props.link && (
        <Link
          className="bg-base-200 hover:bg-base-300 text-base-strong focus-visible:ring-base-1000/75 rounded px-2.5 py-1 font-medium transition-colors outline-none focus-visible:ring-2"
          href={props.link}
          onClick={(e) => e.currentTarget.blur()}
          rel="noopener noreferrer"
          target="_blank"
        >
          Shop
        </Link>
      )}
    </span>
  </button>
)

type PointOfInterestData = {
  posX: number
  posY: number
  text: string
  link?: string
}

export type ImageExplorerProps = {
  points: PointOfInterestData[]
}

export const ImageExplorer = ({ points }: ImageExplorerProps) => {
  const [active, setActive] = useState(false)

  return (
    <div className="group/explorer absolute z-10 hidden size-full sm:block">
      <button
        className={cn(
          'add-focus absolute right-4 bottom-4 z-10 cursor-pointer rounded-full border border-white/20 bg-white/15 p-2 text-sm font-medium text-white opacity-0 transition-all duration-100 group-hover/explorer:opacity-100 hover:bg-white/25 active:scale-95',
          { 'bg-white/25 opacity-100': active },
        )}
        onClick={(e) => {
          setActive(!active), e.currentTarget.blur()
        }}
      >
        <IconShoppingBag className="size-4" strokeWidth={2} />
      </button>

      {active &&
        points.map((point, index) => (
          <PointOfInterest
            key={index}
            active={active}
            delay={index * 75}
            {...point}
          />
        ))}
    </div>
  )
}
