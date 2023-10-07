'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { useMemo, useState } from 'react'
import { ModeContext } from '../contexts/mode.context'
import { CLASS_NAMES } from '../contants/classes.constant'
import {
  getBooksFromLocalStorage,
  getModeFromLocalStorage,
} from '../utils/localstore'
import AddBookModal from '../components/modals/add-book.modal'
import DeleteBookModal from '../components/modals/delete-book.modal'
import { IBook } from '../interfaces/book.interface'
import { BooksContext } from '../contexts/books.context'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mode, setMode] = useState(
    getModeFromLocalStorage() ?? CLASS_NAMES.light,
  )

  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false)
  const [visibleAddModal, setVisibleAddModal] = useState(false)
  const [books, setBooks] = useState<IBook[]>(getBooksFromLocalStorage())
  const [deleteBook, setDeleteBook] = useState({
    id: -1,
    name: '',
  })
  const [start, setStart] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [isGoHome, setGoHome] = useState(false)
  const booksContextValue = useMemo(
    () => ({
      books,
      setBooks,
      setStart,
      start,
      deleteBook,
      setDeleteBook,
      showDeleteOverlay: setVisibleDeleteModal,
      showAddOverlay: setVisibleAddModal,
      itemOffset,
      setItemOffset,
      isGoHome,
      setGoHome,
    }),
    [
      books,
      setBooks,
      setStart,
      start,
      deleteBook,
      setDeleteBook,
      setVisibleDeleteModal,
      setVisibleAddModal,
      itemOffset,
      setItemOffset,
      isGoHome,
      setGoHome,
    ],
  )
  const modeContextValue = useMemo(() => ({ mode, setMode }), [mode, setMode])
  return (
    <html lang="en">
      <BooksContext.Provider value={booksContextValue}>
        <ModeContext.Provider value={modeContextValue}>
          <body className={inter.className}>{children}</body>
          {visibleAddModal && <AddBookModal />}
          {visibleDeleteModal && <DeleteBookModal />}
        </ModeContext.Provider>
      </BooksContext.Provider>
    </html>
  )
}
