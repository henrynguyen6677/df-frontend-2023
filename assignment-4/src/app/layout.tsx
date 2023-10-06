'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { useMemo, useState } from 'react'
import { ModeContext } from '../contexts/mode.context'
import { CLASS_NAMES } from '../contants/classes.constant'
import { getModeFromLocalStorage } from '../utils/localstore'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mode, setMode] = useState(
    getModeFromLocalStorage() ?? CLASS_NAMES.light,
  )

  const modeContextValue = useMemo(() => ({ mode, setMode }), [mode, setMode])
  return (
    <html lang="en">
      <ModeContext.Provider value={modeContextValue}>
        <body className={inter.className}>{children}</body>
      </ModeContext.Provider>
    </html>
  )
}
