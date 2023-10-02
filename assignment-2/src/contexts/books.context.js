import { createContext } from "react";

const noop = () => {};

export const BooksContext = createContext({
  books: [],
  setBooks: noop,
  setStart: noop,
  start: 1,
  deleteBook: {},
  setDeleteBook: noop,
  setVisibleDeleteModal: noop,
  setVisibleAddModal: noop,
  itemOffset: 0,
  setItemOffset: noop,
});
