import { useContext } from 'react'
import { IBook } from '../../interfaces/book.interface'
import { BooksContext } from '../../contexts/books.context'

export default function EditComponent({ book }: { book: IBook }) {
  const booksContext = useContext(BooksContext)
  const handleEditBook = () => {
    booksContext.setEditBook(book)
    booksContext.setVisibleEditModal(true)
  }
  return (
    <button
      type="button"
      className=" cursor-pointer underline text-red-500"
      onClick={handleEditBook}
    >
      Edit
    </button>
  )
}
