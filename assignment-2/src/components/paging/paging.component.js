import { useContext } from "react";
import { BooksContext } from "../../contexts/books.context";
import ReactPaginate from "react-paginate";
import {
  ITEMS_PER_PAGE,
  PAGE_RANGE_DISPLAYED,
} from "../../contants/paging.constant";
import { PAGING_CLASS_NAME } from "../../contants/classes.constant";

function PaginatedItems({ itemsPerPage }) {
  const booksContext = useContext(BooksContext);
  const { books, setItemOffset } = booksContext;
  const pageCount = Math.ceil(books.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % books.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
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
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default function PagingComponent() {
  return <PaginatedItems itemsPerPage={ITEMS_PER_PAGE} />;
}
