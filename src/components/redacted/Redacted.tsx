'use client'

import { Chat } from '@/components/redacted/Chat'
import { useEffect, useState } from 'react'

const CHARS = ['▓', '▒', '░']
const LENGTH = 8

const Redacted = () => {
  const [text, setText] = useState(generateRandomText())
  const [mounted, setMounted] = useState(false)

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
      className="add-focus-text relative cursor-help font-mono"
      onClick={() => console.log('Here')}
    >
      <Chat active={true} />
      {text}
    </button>
  )
}

export default Redacted
