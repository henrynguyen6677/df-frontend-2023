import { createContext } from 'react';
import { IBook, IDeleteBook } from '../interfaces/book.interface';

interface IBooksContext {
  books: IBook[];
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  showAddOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  showDeleteOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  setStart: React.Dispatch<React.SetStateAction<number>>;
  start: number;
  deleteBook: IDeleteBook;
  setDeleteBook: React.Dispatch<React.SetStateAction<IDeleteBook>>;
  itemOffset: number;
  setItemOffset: React.Dispatch<React.SetStateAction<number>>;
}

function setBooks() {}

function setStart() {}

function showAddOverlay() {}
function showDeleteOverlay() {}

function setDeleteBook() {}

function setItemOffset() {}

export const BooksContext = createContext<IBooksContext>({
  books: [] as IBook[],
  setBooks,
  setStart,
  start: 0,
  deleteBook: {
    id: -1,
    name: '',
  },
  setDeleteBook,
  showAddOverlay,
  showDeleteOverlay,
  itemOffset: 0,
  setItemOffset,
});
