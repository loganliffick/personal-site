'use client'

import { BackButton } from '@/components/BackButton'
import {
  IconArrowLeft,
  IconArrowRight,
  IconClipboard,
} from '@/components/Icons'
import { Headline } from '@/components/layout/Headline'
import { Inset } from '@/components/layout/Inset'
import { Main } from '@/components/layout/Main'
import { Section } from '@/components/layout/Section'
import { cn } from '@/utils/tw'
import { useEffect, useRef, useState } from 'react'

export default function Page() {
  const [active, setActive] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    if (active && textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [active])

  return (
    <Main>
      <Section>
        <Inset>
          <BackButton />
          <Headline
            title={'Nested button'}
            subhead={'Testing a full page takeover.'}
          />
          <div className="gap-2">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            {/* cover */}
            <div
              className={cn(
                'bg-base-bg pointer-events-none absolute top-0 left-0 h-screen w-full opacity-0 transition-opacity duration-300 ease-out select-none',
                {
                  'z-50 opacity-100': active,
                },
              )}
            />
            {/* v0 */}
            <div className="relative z-100 flex flex-col items-center">
              {active && (
                <h2
                  className="text-base-strong reveal reveal-xs absolute -top-12 text-2xl font-bold tracking-tight"
                  style={{ animationDelay: '50ms' }}
                >
                  What can I help you ship?
                </h2>
              )}

              <div
                className={cn(
                  'bg-base-100 text-base-strong border-base-border relative z-10 h-[42px] w-[168px] cursor-pointer rounded-lg border px-4 py-2 text-left transition-[width,height,box-shadow] duration-250 ease-out',
                  {
                    'flex h-[100px] w-full cursor-text text-left shadow-md':
                      active,
                  },
                )}
                onClick={() => {
                  setActive(true)
                  active && textareaRef.current?.focus()
                }}
              >
                <span className={cn('block', { hidden: active })}>
                  Ask v0 to build...
                </span>
                <textarea
                  className={cn('hidden resize-none focus:outline-none', {
                    'block w-full': active,
                  })}
                  placeholder="Ask v0 to build..."
                  ref={textareaRef}
                />

                <button
                  className={cn(
                    'bg-base-100 border-base-border fade fade-sm text-base-soft absolute right-3 bottom-3 z-10 hidden size-8 cursor-pointer items-center justify-center rounded-full border font-medium shadow-xs',
                    { flex: active },
                  )}
                  onClick={(e) => {
                    e.stopPropagation()
                    setActive(false)
                  }}
                >
                  <IconArrowRight className="size-3.5 -rotate-90" />
                </button>

                <nav
                  className={cn(
                    'fade fade-sm absolute bottom-3 left-3 hidden',
                    {
                      flex: active,
                    },
                  )}
                  style={{ animationDelay: '50ms' }}
                >
                  <button
                    className={cn(
                      'text-base-soft hover:bg-base-200 hidden size-8 cursor-pointer items-center justify-center rounded-md font-medium transition-colors',
                      { flex: active },
                    )}
                    onClick={(e) => {
                      e.stopPropagation()
                      setActive(false)
                    }}
                  >
                    <IconArrowLeft className="size-4" />
                  </button>
                  <button
                    className={cn(
                      'text-base-soft hover:bg-base-200 hidden size-8 cursor-pointer items-center justify-center rounded-md font-medium transition-colors',
                      { flex: active },
                    )}
                    onClick={(e) => {
                      e.stopPropagation()
                      setActive(false)
                    }}
                  >
                    <IconClipboard className="size-4" />
                  </button>
                </nav>

                <nav
                  className={cn(
                    'fade fade-sm absolute -bottom-11 left-0 hidden gap-2',
                    {
                      flex: active,
                    },
                  )}
                >
                  <button
                    className={cn(
                      'text-base-soft bg-base-100 border-base-border hidden w-max cursor-pointer items-center justify-center rounded-full border px-3 py-1 text-xs shadow-sm',
                      { 'reveal reveal-reverse block': active },
                    )}
                    onClick={(e) => {
                      e.stopPropagation()
                      setActive(false)
                    }}
                    style={{ animationDelay: '0ms' }}
                  >
                    Clone a screenshot
                  </button>
                  <button
                    className={cn(
                      'text-base-soft bg-base-100 border-base-border hidden w-max cursor-pointer items-center justify-center rounded-full border px-3 py-1 text-xs shadow-sm',
                      { 'reveal reveal-reverse block': active },
                    )}
                    onClick={(e) => {
                      e.stopPropagation()
                      setActive(false)
                    }}
                    style={{ animationDelay: '50ms' }}
                  >
                    Import from Figma
                  </button>
                  <button
                    className={cn(
                      'text-base-soft bg-base-100 border-base-border hidden w-max cursor-pointer items-center justify-center rounded-full border px-3 py-1 text-xs shadow-sm',
                      { 'reveal reveal-reverse block': active },
                    )}
                    onClick={(e) => {
                      e.stopPropagation()
                      setActive(false)
                    }}
                    style={{ animationDelay: '100ms' }}
                  >
                    Landing page
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </Inset>
      </Section>
    </Main>
  )
}
