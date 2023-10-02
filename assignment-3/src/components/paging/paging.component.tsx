import { useContext, useEffect, useRef } from 'react';
import ReactPaginate from 'react-paginate';
import { BooksContext } from '../../contexts/books.context';
import {
  ITEMS_PER_PAGE,
  PAGE_RANGE_DISPLAYED,
} from '../../contants/paging.constant';
import { PAGING_CLASS_NAME } from '../../contants/classes.constant';

function PaginatedItems({ itemsPerPage }) {
  const booksContext = useContext(BooksContext);
  const forcePageRef = useRef<number | undefined>(undefined);
  const { books, setItemOffset } = booksContext;
  useEffect(() => {
    if (books?.length % itemsPerPage !== 0) return;
    forcePageRef.current = books.length / itemsPerPage - 1;
    const newOffset = forcePageRef.current * itemsPerPage;
    setItemOffset(newOffset);
  }, [books, itemsPerPage, setItemOffset]);

  const pageCount = Math.ceil(books.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % books.length;
    setItemOffset(newOffset);
  };

  return (
    <ReactPaginate
      forcePage={forcePageRef.current}
      className={PAGING_CLASS_NAME.className}
      pageClassName={PAGING_CLASS_NAME.pageClassName}
      breakClassName={PAGING_CLASS_NAME.breakClassName}
      activeClassName={PAGING_CLASS_NAME.activeClassName}
      previousClassName={PAGING_CLASS_NAME.previousClassName}
      nextClassName={PAGING_CLASS_NAME.nextClassName}
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={(props) => {
        console.log('props', props);
      }}
    />
  );
}

export default function PagingComponent() {
  return <PaginatedItems itemsPerPage={ITEMS_PER_PAGE} />;
}
