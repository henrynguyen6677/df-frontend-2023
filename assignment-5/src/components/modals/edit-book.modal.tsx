import { FormEvent, useContext, useRef, useState } from 'react'
import * as z from 'zod'
import { BooksContext } from '../../contexts/books.context'
import { setBooksToLocalStorage } from '../../utils/localstore'
import { IBook } from '../../interfaces/book.interface'
import { cloneObject, JSONStringToObject } from '../../utils/parse.helper'
import { TOPICS } from '../../contants/topic.constant'
import { Errors } from '../../contants/error.constant'

export default function EditBookModal() {
  const booksContext = useContext(BooksContext)
  const { editBook, books } = booksContext

  const formRef = useRef<HTMLFormElement | null>(null)
  const [errors, setErrors] = useState<Errors>({})

  const editBookValidationSchema = z.object({
    author: z.string().trim().min(5, 'Minimum length should be 5 characters'),
    name: z
      .string()
      .trim()
      .regex(/^[A-Za-z\s]+$/, 'Only letters and spaces are allowed'),
    topic: z.enum([
      TOPICS.other,
      TOPICS.devops,
      TOPICS.comic,
      TOPICS.programing,
      TOPICS.database,
    ]),
  })
  const handleClose = () => booksContext.setVisibleEditModal(false)
  const handleEditBook = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(formRef.current as HTMLFormElement)
    try {
      editBookValidationSchema.parse({
        author: formData.get('author') as string,
        name: formData.get('name') as string,
        topic: formData.get('topic') as string,
      })
      setErrors({})

      const bookIndex = books.findIndex((book) => book.id === editBook.id)
      if (bookIndex === -1) return
      const newBook = { ...books[bookIndex] }
      newBook.author = formData.get('author') as string
      newBook.name = formData.get('name') as string
      newBook.topic = formData.get('topic') as string
      books[bookIndex] = newBook
      const newBooks: IBook[] = cloneObject(books)
      setBooksToLocalStorage(newBooks)
      booksContext.setBooks(newBooks)
      handleClose()
    } catch (err) {
      if (err instanceof z.ZodError) {
        setErrors(err.flatten().fieldErrors as Errors)
      }
    }
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
          <div>Edit book</div>

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
        <form ref={formRef} id="formAddBook" onSubmit={handleEditBook}>
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
                defaultValue={editBook.name}
                className={`
                  pl-1
                  border-solid
                  border-black
                  rounded-[2px]
                  border-[1px]
                  ${errors?.name ? 'border-red-500' : ''}
                `}
                type="text"
                name="name"
                id="name"
                required
              />
            </label>
            <div className="text-red-500 text-[0.9rem]">{errors?.name}</div>
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
                defaultValue={editBook.author}
                className={`
                pl-1
                border-solid
                border-black
                rounded-[2px]
                border-[1px]
                ${errors?.author ? 'border-red-500' : ''}
                `}
                type="text"
                name="author"
                id="author"
                required
              />
            </label>
            <div className="text-red-500 text-[0.9rem]">{errors?.author}</div>
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
                defaultValue={editBook.topic}
                className="
                border-solid
                border-black
                rounded-[2px]
                border-[1px]
                flex
              "
                required
                name="topic"
                id="topic"
              >
                <option value={TOPICS.comic}>{TOPICS.comic}</option>
                <option value={TOPICS.database}>{TOPICS.database}</option>
                <option value={TOPICS.devops}>{TOPICS.devops}</option>
                <option value={TOPICS.programing}>{TOPICS.programing}</option>
                <option value={TOPICS.other}>{TOPICS.other}</option>
              </select>
            </label>
            <div className="text-red-500 text-[0.9rem]">{errors?.topic}</div>
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
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
