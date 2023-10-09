import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import {
  getBooksFromLocalStorage,
  setBooksToLocalStorage,
} from '../../utils/localstore'
import { BooksContext } from '../../contexts/books.context'
import { IBook } from '../../interfaces/book.interface'
import { RoutesConstant } from '../../contants/routes.constant'

export default function DeleteBookModal() {
  const router = useRouter()
  const booksContext = useContext(BooksContext)
  const handleClose = () => booksContext.showDeleteOverlay(false)
  const handleDelete = () => {
    const { id } = booksContext.deleteBook
    const books: IBook[] = getBooksFromLocalStorage()
    const index = books.findIndex((book) => book.id === id)
    if (index < -1) return
    books.splice(index, 1)
    booksContext.setBooks(books)
    setBooksToLocalStorage(books)
    handleClose()
    if (booksContext.isGoHome) {
      router.push(RoutesConstant.HOME)
    }
  }

  return (
    <div
      id="overlayDeleteBook"
      className="
        flex
        bg-gray-300
        bg-opacity-20
        h-full
        w-full
        absolute
        top-0
        z-100
    "
    >
      <div
        className="
        relative
        w-[15rem]
        text-black
        bg-white
        p-4
        m-auto
      "
      >
        <div
          className="
            flex
            items-center
            font-bold
            justify-between
        "
        >
          <div>Delete book</div>
          <button
            className="
              cursor-pointer
              text-right
              w-8
          "
            onClick={handleClose}
            id="closeDeleteBook"
          >
            <i className="fa fa-times" aria-hidden="true" />X
          </button>
        </div>
        <div
          id="areaDeleteBook"
          className="
          pt-8 pb-8
        "
        >
          <span>Do you want to delete </span>
          <b>{booksContext.deleteBook.name}</b>
          <span> book?</span>
        </div>
        <div
          className="
            flex
            flex-row
            justify-around
            pt-2
            pb-2
        "
        >
          <button onClick={handleDelete} id="delete" className="button-delete">
            Delete
          </button>
          <button
            className="
            bg-[#c7266b]
            rounded-[0.3rem]
            pl-[1rem]
            pr-[1rem]
            text-white
          "
            onClick={handleClose}
            id="cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
