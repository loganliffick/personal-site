'use client'

import dynamic from 'next/dynamic'

const Redacted = dynamic(() => import('./Redacted'), {
  ssr: false,
  loading: () => (
    <span className="cursor-help font-mono select-none">▓░▓▒░░▓░</span>
  ),
})

export const RedactedText = () => {
  return <Redacted />
}
