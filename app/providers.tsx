'use client'
import type { ReactNode } from 'react'
import { RetireProvider } from './src/RetireProvider'

export function Providers({ children }: { children: ReactNode }) {
  return <RetireProvider>{children}</RetireProvider>
}

