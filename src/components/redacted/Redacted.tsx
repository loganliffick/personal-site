'use client'

import { Chat } from '@/components/redacted/Chat'
import { cn } from '@/utils/tw'
import { useEffect, useState } from 'react'

const CHARS = ['▓', '▒', '░']
const LENGTH = 8

const Redacted = () => {
  const [text, setText] = useState(generateRandomText())
  const [mounted, setMounted] = useState(false)
  const [chatActive, setChatActive] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setText(generateRandomText())
    }, 500)

    return () => clearInterval(interval)
  }, [])

  function generateRandomText() {
    return Array.from(
      { length: LENGTH },
      () => CHARS[Math.floor(Math.random() * CHARS.length)],
    ).join('')
  }
  return (
    <button
      className={cn('add-focus-text cursor-help font-mono', {
        'cursor-auto': chatActive,
      })}
      onClick={() => setChatActive(true)}
    >
      <Chat active={chatActive} setActive={() => setChatActive(false)} />
      {text}
    </button>
  )
}

export default Redacted
