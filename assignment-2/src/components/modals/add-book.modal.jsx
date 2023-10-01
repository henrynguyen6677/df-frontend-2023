import { useContext, useRef } from "react";
import { BooksContext } from "../../contexts/books.context";
import { LocalStorage } from "../../utils/localstore";
import { BOOKS } from "../../contants/storage";
import { JSONStringToObject } from "../../utils/parse.helper";

export default function AddBookModal() {
  const booksContext = useContext(BooksContext);
  const formRef = useRef();
  const handleClose = () => booksContext.showAddOverlay(false);
  const handleCreateBook = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const { author, name, topic } = Object.fromEntries(formData);
    const newBooks = JSONStringToObject(JSON.stringify(booksContext.books));
    newBooks.push({
      id: Date.now(),
      author,
      name,
      topic,
    });
    LocalStorage.setItem(BOOKS, JSON.stringify(newBooks));
    booksContext.setBooks(newBooks);
    handleClose();
  };
  return (
    <div id="overlayAddBook" className="overlay">
      <div className="modal add-book">
        <div className="modal-header">
          <div>Add book</div>
          <div onClick={handleClose} id="closeAddBook">
            X
          </div>
        </div>
        <form ref={formRef} id="formAddBook" onSubmit={handleCreateBook}>
          <div className="add-control">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="add-control">
            <label htmlFor="author">Author</label>
            <input type="text" name="author" id="author" />
          </div>
          <div className="add-control">
            <label htmlFor="topic">Topic</label>
            <select name="topic" id="topic">
              <option value="Comic">Comic</option>
              <option value="Database">Database</option>
              <option value="DevOps">DevOps</option>
              <option value="Programming">Programming</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="add-control buttons-right">
            <button type="submit" id="createBook">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
