'use client'

import { useMemo, useState } from 'react'
import ProfileComponent from '../components/profile/profile.component'
import SearchComponent from '../components/search/search.component'
import { getBooksFromLocalStorage } from '../utils/localstore'
import TableComponent from '../components/table/table.component'
import PagingComponent from '../components/paging/paging.component'
import { IBook } from '../interfaces/book.interface'
import { BooksContext } from '../contexts/books.context'
import AddBookModal from '../components/modals/add-book.modal'
import DeleteBookModal from '../components/modals/delete-book.modal'

export default function Home() {
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false)
  const [visibleAddModal, setVisibleAddModal] = useState(false)
  const [books, setBooks] = useState<IBook[]>(getBooksFromLocalStorage())
  const [deleteBook, setDeleteBook] = useState({
    id: -1,
    name: '',
  })
  const [start, setStart] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
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
    ],
  )

  return (
    <BooksContext.Provider value={booksContextValue}>
      <div className="bg-[#efefef] p-8 h-[100vh]">
        <ProfileComponent />
        <SearchComponent defaultBooks={getBooksFromLocalStorage()} />
        <TableComponent />
        <PagingComponent />
      </div>

      {visibleAddModal && <AddBookModal />}
      {visibleDeleteModal && <DeleteBookModal />}
    </BooksContext.Provider>
  )
}
