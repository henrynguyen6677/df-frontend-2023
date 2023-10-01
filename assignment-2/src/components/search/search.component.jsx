import { useContext } from "react";
import PropTypes from "prop-types";
import { BooksContext } from "../../contexts/books.context";
import { SearchHelper } from "../../utils/search.helper";

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

  const handleAdd = () => bookRowsContext.showAddOverlay(true);

  return (
    <div id="search">
      <input
        id="searchInput"
        onChange={handleFilter}
        placeholder="Search books"
      />
      <button onClick={handleAdd} id="addBook">
        Add book
      </button>
    </div>
  );
}

SearchComponent.propsType = {
  defaultBooks: PropTypes.array,
};
