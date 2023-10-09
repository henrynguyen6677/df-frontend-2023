import { useContext } from 'react'
import { BooksContext } from '../../contexts/books.context'
import { IBook } from '../../interfaces/book.interface'

export default function DeleteComponent({
  id,
  name,
}: Pick<IBook, 'id' | 'name'>) {
  const booksContext = useContext(BooksContext)
  const openPopupDelete = (id: number, name: string) => {
    booksContext.setDeleteBook({
      id,
      name,
    })
    booksContext.showDeleteOverlay(true)
  }
  return (
    <button
      type="button"
      className=" cursor-pointer underline text-red-500"
      onClick={() => openPopupDelete(id, name)}
    >
      Delete
    </button>
  )
}
