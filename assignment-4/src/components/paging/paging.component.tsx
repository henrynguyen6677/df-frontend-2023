import { useContext, useEffect, useRef } from 'react'
import ReactPaginate from 'react-paginate'
import { BooksContext } from '../../contexts/books.context'
import {
  ITEMS_PER_PAGE,
  PAGE_RANGE_DISPLAYED,
} from '../../contants/paging.constant'
import { PAGING_CLASS_NAME } from '../../contants/classes.constant'

function PaginatedItems({ itemsPerPage }) {
  const booksContext = useContext(BooksContext)
  const forcePageRef = useRef<number | undefined>(undefined)
  const { books, setItemOffset } = booksContext
  useEffect(() => {
    if (books.length % itemsPerPage !== 0) return
    forcePageRef.current = books.length / itemsPerPage - 1
    const newOffset = forcePageRef.current * itemsPerPage
    setItemOffset(newOffset)
  }, [books, itemsPerPage, setItemOffset])
  if (!books) return null
  const pageCount = Math.ceil(books.length / itemsPerPage)
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % books.length
    setItemOffset(newOffset)
  }

  return (
    <ReactPaginate
      forcePage={forcePageRef.current}
      className="
        flex
        items-center
        justify-end
        pt-4
        pb-4
      "
      pageClassName="
      p-2
      [&>a]:border-solid
      [&>a]:border-gray-600
      [&>a]:border-2
      [&>a]:cursor-pointer
      [&>a]:cursor-pointer
      [&>a]:pr-[1rem]
      [&>a]:pl-[1rem]
      [&>a]:pt-[0.5rem]
      [&>a]:pb-[0.5rem]
      [&>a]:text-green-800
      "
      breakClassName={PAGING_CLASS_NAME.breakClassName}
      activeClassName="
        [&>a]:border-solid
        [&>a]:border-[#FFF]
        [&>a]:border-2
        [&>a]:bg-[#e59797]
        [&>a]:text-white
        [&>a]:text-bold
      "
      previousClassName="
        cursor-pointer
        text-green-800
        font-bold
      "
      nextClassName="
        cursor-pointer
        text-green-800
        font-bold
      "
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
  )
}

export default function PagingComponent() {
  return <PaginatedItems itemsPerPage={ITEMS_PER_PAGE} />
}
