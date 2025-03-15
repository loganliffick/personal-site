'use client'

import { ModalProvider } from '@/providers/ModalProvider'
import { TooltipProvider } from '@/providers/TooltipProvider'
// import { UserProvider } from '@/providers/UserContext'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    // <UserProvider>
    <TooltipProvider>
      <ModalProvider>{children}</ModalProvider>
    </TooltipProvider>
    // </UserProvider>
  )
}
