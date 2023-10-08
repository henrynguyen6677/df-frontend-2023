'use client'

import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getBooksFromLocalStorage } from '../../../utils/localstore'
import { IBook } from '../../../interfaces/book.interface'
import DeleteComponent from '../../../components/table/delete.component'
import { BooksContext } from '../../../contexts/books.context'

interface IBookProps {
  params: {
    id: number
  }
}

export default function Book(props: IBookProps) {
  const router = useRouter()
  const bookId = props?.params?.id
  const [book, setBook] = useState<IBook>()
  const booksContext = useContext(BooksContext)
  useEffect(() => {
    if (!bookId) return router.push('/not-found')
    const books: IBook[] = getBooksFromLocalStorage()
    const book = books.find(({ id }) => id === Number(bookId))
    if (!book) return router.push('/not-found')

    setBook(book)
    booksContext.setGoHome(true)
  }, [bookId, router, booksContext])
  return (
    <div className="p-8">
      <div>
        <button
          type="button"
          className="cursor-pointer underline text-red-500 pb-4"
          onClick={() => router.push('/')}
        >
          Back
        </button>
      </div>
      <div>
        <div className="pb-8 font-bold">{book?.name}</div>
        <div>
          <span className="font-bold">Author: </span>
          {book?.author}
        </div>
        <div>
          <span className="font-bold">Topic: </span>
          {book?.topic}
        </div>
      </div>
      <div className="pt-8">
        <DeleteComponent id={bookId} name={book?.name as string} />
      </div>
    </div>
  )
}
