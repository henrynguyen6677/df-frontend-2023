import { useContext } from 'react'
import { BooksContext } from '../../contexts/books.context'
import BookComponent from './book.component'
import DeleteComponent from './delete.component'
import { ITEMS_PER_PAGE } from '../../contants/paging.constant'
import ViewComponent from './view.component'
import DividerComponent from './divider.component'
import EditComponent from './edit.component'
import { IBook } from '../../interfaces/book.interface'

export default function BooksComponent() {
  const booksContext = useContext(BooksContext)
  const { books, itemOffset } = booksContext
  const endOffset = itemOffset + ITEMS_PER_PAGE
  return (
    <tbody>
      {books?.slice(itemOffset, endOffset).map((book: IBook) => {
        const { id, author, name, topic } = book
        return (
          <BookComponent
            key={id}
            id={id}
            name={name}
            author={author}
            topic={topic}
            actionElement={
              <>
                <EditComponent book={book} />
                <DividerComponent />
                <DeleteComponent id={id} name={name} />
                <DividerComponent />
                <ViewComponent id={id} />
              </>
            }
          />
        )
      })}
    </tbody>
  )
}
