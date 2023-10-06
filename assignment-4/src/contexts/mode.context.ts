import { createContext } from 'react'
import { CLASS_NAMES } from '../contants/classes.constant'

interface IModeContext {
  mode: string
  setMode: (modeValue: string) => void
}

export const ModeContext = createContext<IModeContext>({
  mode: CLASS_NAMES.light,
  setMode: () => undefined,
})
