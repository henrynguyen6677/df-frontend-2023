import {createContext} from "react";

export const BookRowsContext = createContext({
  rows: Array,
  setRows: Function
})
