import { createContext } from 'react'
import { IBook, IDeleteBook } from '../interfaces/book.interface'

interface IBooksContext {
  books: IBook[]
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>
  showAddOverlay: React.Dispatch<React.SetStateAction<boolean>>
  showDeleteOverlay: React.Dispatch<React.SetStateAction<boolean>>
  setStart: React.Dispatch<React.SetStateAction<number>>
  start: number
  deleteBook: IDeleteBook
  setDeleteBook: React.Dispatch<React.SetStateAction<IDeleteBook>>
  itemOffset: number
  setItemOffset: React.Dispatch<React.SetStateAction<number>>
  isGoHome: boolean
  setGoHome: React.Dispatch<React.SetStateAction<boolean>>
  editBook: IBook
  setEditBook: React.Dispatch<React.SetStateAction<IBook>>
  setVisibleEditModal: React.Dispatch<React.SetStateAction<boolean>>
}

const noop = () => {}

export const BooksContext = createContext<IBooksContext>({
  books: [] as IBook[],
  setBooks: noop,
  setStart: noop,
  start: 0,
  deleteBook: {
    id: -1,
    name: '',
  },
  setDeleteBook: noop,
  showAddOverlay: noop,
  showDeleteOverlay: noop,
  itemOffset: 0,
  setItemOffset: noop,
  isGoHome: false,
  setGoHome: noop,
  editBook: <IBook>{},
  setEditBook: noop,
  setVisibleEditModal: noop,
})
