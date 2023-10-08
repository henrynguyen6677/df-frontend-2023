import { useContext } from 'react'
import { BooksContext } from '../../contexts/books.context'

export default function DeleteComponent({
  id,
  name,
}: {
  id: number
  name: string
}) {
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
