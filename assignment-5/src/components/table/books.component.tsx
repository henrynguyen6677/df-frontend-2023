import { useContext } from 'react'
import { BooksContext } from '../../contexts/books.context'
import BookComponent from './book.component'
import DeleteComponent from './delete.component'
import { ITEMS_PER_PAGE } from '../../contants/paging.constant'
import ViewComponent from './view.component'

export default function BooksComponent() {
  const booksContext = useContext(BooksContext)
  const { books, itemOffset } = booksContext
  const endOffset = itemOffset + ITEMS_PER_PAGE
  return (
    <tbody>
      {books
        ?.slice(itemOffset, endOffset)
        .map(({ id, author, name, topic }) => {
          return (
            <BookComponent
              key={id}
              id={id}
              name={name}
              author={author}
              topic={topic}
              actionElement={
                <>
                  <DeleteComponent id={id} name={name} />
                  <span
                    className="
                    pl-2 pr-2
                    text-red-500
                  "
                  >
                    |
                  </span>
                  <ViewComponent id={id} />
                </>
              }
            />
          )
        })}
    </tbody>
  )
}
