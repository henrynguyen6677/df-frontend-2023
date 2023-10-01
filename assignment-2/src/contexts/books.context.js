import { createContext } from "react";

export const BooksContext = createContext({
  books: Array,
  setBooks: Function,
  setStart: Function,
  start: Number,
  deleteBook: Object,
  setDeleteBook: Function,
  setVisibleDeleteModal: Function,
  setVisibleAddModal: Function,
  itemOffset: Number,
  setItemOffset: Function,
});
