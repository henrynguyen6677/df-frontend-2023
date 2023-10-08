import { FormEvent, useContext, useRef } from 'react'
import { BooksContext } from '../../contexts/books.context'
import { setBooksToLocalStorage } from '../../utils/localstore'
import { JSONStringToObject } from '../../utils/parse.helper'
import { IBook } from '../../interfaces/book.interface'

export default function AddBookModal() {
  const booksContext = useContext(BooksContext)
  const formRef = useRef<HTMLFormElement | null>(null)
  const handleClose = () => booksContext.showAddOverlay(false)
  const handleCreateBook = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(formRef.current as HTMLFormElement)
    const newBooks: IBook[] =
      JSONStringToObject(JSON.stringify(booksContext.books)) || []
    newBooks.push({
      id: Date.now(),
      author: formData.get('author') as string,
      name: formData.get('name') as string,
      topic: formData.get('topic') as string,
    })
    setBooksToLocalStorage(newBooks)
    booksContext.setBooks(newBooks)
    handleClose()
  }

  return (
    <div
      id="overlayAddBook"
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
        m-auto"
      >
        <div
          className="
            flex
            items-center
            font-bold
            justify-between
        "
        >
          <div>Add book</div>

          <button
            onClick={handleClose}
            className="
              cursor-pointer
              text-right
              w-8
          "
            id="closeAddBook"
          >
            <i className="fa fa-times" aria-hidden="true" />X
          </button>
        </div>
        <form ref={formRef} id="formAddBook" onSubmit={handleCreateBook}>
          <div
            className="
            flex
            flex-col
            pt-2
            pb-2
          "
          >
            <label htmlFor="name">
              Name
              <input
                className="
                border-solid
                border-black
                rounded-[2px]
                border-[1px]
              "
                type="text"
                name="name"
                id="name"
              />
            </label>
          </div>
          <div
            className="
            flex
            flex-col
            pt-2
            pb-2
          "
          >
            <label htmlFor="author">
              Author
              <input
                className="
                border-solid
                border-black
                rounded-[2px]
                border-[1px]
              "
                type="text"
                name="author"
                id="author"
              />
            </label>
          </div>
          <div
            className="
            flex
            flex-col
            pt-2
            pb-2
          "
          >
            <label htmlFor="topic">
              Topic
              <select
                className="
                border-solid
                border-black
                rounded-[2px]
                border-[1px]
                flex
              "
                name="topic"
                id="topic"
              >
                <option value="Comic">Comic</option>
                <option value="Database">Database</option>
                <option value="DevOps">DevOps</option>
                <option value="Programming">Programming</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
          <div
            className="
            flex
            flex-col
            pt-2
            pb-2
            items-end
          "
          >
            <button
              className="
              bg-fuchsia-800
              text-white
              rounded-[0.3rem]
              w-20
            "
              type="submit"
              id="createBook"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
