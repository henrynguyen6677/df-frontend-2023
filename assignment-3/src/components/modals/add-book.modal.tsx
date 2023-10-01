import { useContext, useRef } from 'react';
import { BooksContext } from '../../contexts/books.context';
import { SetBooksToLocalStorage } from '../../utils/localstore';
import { JSONStringToObject } from '../../utils/parse.helper';
import { IBook } from '../../interfaces/book.interface';

export default function AddBookModal() {
  const booksContext = useContext(BooksContext);
  const formRef = useRef<HTMLFormElement | null>(null);
  const handleClose = () => booksContext.showAddOverlay(false);
  const handleCreateBook = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current as HTMLFormElement);
    const newBooks: IBook[] = JSONStringToObject(
      JSON.stringify(booksContext.books),
    );
    newBooks.push({
      id: Date.now(),
      author: formData.get('author') as string,
      name: formData.get('name') as string,
      topic: formData.get('topic') as string,
    });
    SetBooksToLocalStorage(newBooks);
    booksContext.setBooks(newBooks);
    handleClose();
  };

  return (
    <div id="overlayAddBook" className="overlay">
      <div className="modal add-book">
        <div className="modal-header">
          <div>Add book</div>

          <button onClick={handleClose} id="closeAddBook">
            <i className="fa fa-times" aria-hidden="true" />
          </button>
        </div>
        <form ref={formRef} id="formAddBook" onSubmit={handleCreateBook}>
          <div className="add-control">
            <label htmlFor="name">
              Name
              <input type="text" name="name" id="name" />
            </label>
          </div>
          <div className="add-control">
            <label htmlFor="author">
              Author
              <input type="text" name="author" id="author" />
            </label>
          </div>
          <div className="add-control">
            <label htmlFor="topic">
              Topic
              <select name="topic" id="topic">
                <option value="Comic">Comic</option>
                <option value="Database">Database</option>
                <option value="DevOps">DevOps</option>
                <option value="Programming">Programming</option>
                <option value="Other">Other</option>
              </select>
            </label>
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
