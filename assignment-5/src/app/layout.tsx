'use client'

import './globals.css'
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
import EditBookModal from '../components/modals/edit-book.modal'

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
  const [editBook, setEditBook] = useState<IBook>({
    author: '',
    id: -1,
    name: '',
    topic: '',
  })
  const [visibleEditModal, setVisibleEditModal] = useState(false)

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
      editBook,
      setEditBook,
      setVisibleEditModal,
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
      editBook,
      setEditBook,
      setVisibleEditModal,
    ],
  )
  const modeContextValue = useMemo(() => ({ mode, setMode }), [mode, setMode])

  const light = 'bg-[#efefef] text-[#212020]'
  const dark = 'bg-black text-[#eee]'
  return (
    <html lang="en">
      <BooksContext.Provider value={booksContextValue}>
        <ModeContext.Provider value={modeContextValue}>
          <body className={mode === CLASS_NAMES.light ? light : dark}>
            {children}
          </body>
          {visibleAddModal && <AddBookModal />}
          {visibleDeleteModal && <DeleteBookModal />}
          {visibleEditModal && <EditBookModal />}
        </ModeContext.Provider>
      </BooksContext.Provider>
    </html>
  )
}
