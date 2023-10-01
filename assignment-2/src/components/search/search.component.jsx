import { useContext } from "react";
import { OverlayContext } from "../../contexts/overlay.context";
import PropTypes from "prop-types";
import { BookRowsContext } from "../../contexts/book-rows.context";
import { SearchHelper } from "../../utils/search.helper";

export default function SearchComponent({ defaultBooks }) {
  const bookRowsContext = useContext(BookRowsContext);
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

  const overlayContext = useContext(OverlayContext);
  const handleAdd = () => overlayContext.showAddOverlay(true);

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
  defaultRows: PropTypes.array,
};
