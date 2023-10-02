import { useContext } from "react";
import {
  getBooksFromLocalStorage,
  setBooksToLocalStorage,
} from "../../utils/localstore";
import { BooksContext } from "../../contexts/books.context";

export default function DeleteBookModal() {
  const booksContext = useContext(BooksContext);
  const handleClose = () => booksContext.setVisibleDeleteModal(false);
  const handleDelete = () => {
    const id = booksContext.deleteBook.id;
    const books = getBooksFromLocalStorage();
    const index = books.findIndex((book) => book.id === id);
    if (index < -1) return;
    books.splice(index, 1);
    booksContext.setBooks(books);
    setBooksToLocalStorage(books);
    handleClose();
  };

  return (
    <div id="overlayDeleteBook" className="overlay">
      <div className="modal delete-book">
        <div className="modal-header">
          <div>Delete book</div>
          <div onClick={handleClose} id="closeDeleteBook">
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
        <div id="areaDeleteBook">
          <span>Do you want to delete </span>
          <b>{booksContext.deleteBook.name}</b>
          <span> book?</span>
        </div>
        <div className="add-control buttons">
          <button onClick={handleDelete} id="delete" className="button-delete">
            Delete
          </button>
          <button onClick={handleClose} id="cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
