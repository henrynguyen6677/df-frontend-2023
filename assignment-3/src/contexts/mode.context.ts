import { createContext } from 'react';

interface IModeContext {
  mode: string;
  setMode: (modeValue: string) => void;
}

export const ModeContext = createContext<IModeContext>({
  mode: '',
  setMode: () => undefined,
});
