import { useContext } from "react";
import PropTypes from "prop-types";
import { BooksContext } from "../../contexts/books.context";
import { SearchHelper } from "../../utils/search.helper";
import { setBooksToLocalStorage } from "../../utils/localstore";
import { bookstore } from "../../seed/bookstore";

export default function SearchComponent({ defaultBooks }) {
  const bookRowsContext = useContext(BooksContext);
  const { setBooks, books } = bookRowsContext;
  const handleFilter = (e) => {
    const filter = e.target.value;
    if (filter === "" && books.length === 0) {
      setBooks(defaultBooks);
      return;
    }
    const newBooks = SearchHelper(defaultBooks, filter);
    setBooks(newBooks);
  };

  const handleAdd = () => bookRowsContext.setVisibleAddModal(true);
  const handleInit = () => {
    setBooksToLocalStorage(bookstore.data);
    bookRowsContext.setBooks(bookstore.data);
  };
  return (
    <div id="search">
      <div className="initContainer">
        <button onClick={handleInit} id="initBooks">
          Init books
        </button>
      </div>
      <div className="searchContainer">
        <input
          id="searchInput"
          onChange={handleFilter}
          placeholder="Search books"
        />
        <button onClick={handleAdd} id="addBook">
          Add book
        </button>
      </div>
    </div>
  );
}

SearchComponent.propsType = {
  defaultBooks: PropTypes.array,
};
