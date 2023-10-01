import { createContext } from "react";

export const BookRowsContext = createContext({
  books: Array,
  setBooks: Function,
  setStart: Function,
  start: Number,
  deleteRow: Object,
});
