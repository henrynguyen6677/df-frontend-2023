import { useContext } from 'react'
import { CLASS_NAMES } from '../../contants/classes.constant'
import { BooksContext } from '../../contexts/books.context'

export default function DeleteComponent({
  id,
  name,
}: {
  id: number
  name: string
}) {
  const booksContext = useContext(BooksContext)
  const openPopupDelete = (id, name) => {
    booksContext.setDeleteBook({
      id,
      name,
    })
    booksContext.showDeleteOverlay(true)
  }
  return (
    <button
      type="button"
      className={CLASS_NAMES.deleteItem}
      onClick={() => openPopupDelete(id, name)}
    >
      Delete
    </button>
  )
}
