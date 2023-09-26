import {createContext} from "react";

export const ModeContext = createContext({
  mode: String,
  setMode: Function
})
