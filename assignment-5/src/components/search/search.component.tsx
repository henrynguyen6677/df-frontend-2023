import { useContext } from 'react'
import { BooksContext } from '../../contexts/books.context'
import { SearchHelper } from '../../utils/search.helper'
import { setBooksToLocalStorage } from '../../utils/localstore'
import { bookstore } from '../../seed/bookstore'

export default function SearchComponent({ defaultBooks }) {
  const bookRowsContext = useContext(BooksContext)
  const { setBooks, books } = bookRowsContext
  const handleFilter = (e) => {
    const filter = e.target.value
    if (filter === '' && books.length === 0) {
      setBooks(defaultBooks)
      return
    }
    const newBooks = SearchHelper(defaultBooks, filter)
    setBooks(newBooks)
  }

  const handleAdd = () => bookRowsContext.showAddOverlay(true)
  const handleInit = () => {
    setBooksToLocalStorage(bookstore.data)
    bookRowsContext.setBooks(bookstore.data)
  }
  return (
    <div className="flex pt-8 pb-8 h-8 items-center justify-between">
      <div className="relative float-left">
        <button
          onClick={handleInit}
          className="
            bg-[#c7266b]
            border-solid
            border-1
            rounded-[0.3rem]
            text-white
            ml-4
            min-w-[6rem]
            p-[0.3rem]
          "
        >
          Init books
        </button>
      </div>
      <div className="flex h-[2rem] pr-4 pl-4">
        <input
          className="
          bg-white flex
          justify-center
          items-center
          rounded-[0.2rem]
          p-4
          "
          onChange={handleFilter}
          placeholder="Search books"
        />
        <button
          onClick={handleAdd}
          className="
          bg-[#c7266b]
          border-solid
          rounded-[0.3rem]
          text-white
          cursor-pointer
          flex
          ml-4
          min-w-[6rem]
          justify-center
          items-center
          p-4
        "
        >
          Add book
        </button>
      </div>
    </div>
  )
}
