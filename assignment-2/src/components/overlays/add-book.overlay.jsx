import {useContext, useRef} from "react";
import {OverlayContext} from "../../contexts/overlay.context";
import {BookRowsContext} from "../../contexts/book-rows.context";
import {LocalStorage} from "../../utils/localstore";
import {BOOKS} from "../../contants/storage";

export default function AddBookOverlay () {
  const overlayContext = useContext(OverlayContext)
  const formRef = useRef()
  const handleClose = () => overlayContext.showAddOverlay(false)
  const bookRowsContext = useContext(BookRowsContext)
  const handleCreateBook = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current);
    const { author, name, topic } = Object.fromEntries(formData)
    console.log(author, name, topic)
    console.log(bookRowsContext.rows)

    const newRows = JSON.parse(JSON.stringify(bookRowsContext.rows))
    newRows.push({
      id: Date.now(),
      author, name, topic
    })
    // TODO: Add to localstorage
    LocalStorage.setItem(BOOKS, JSON.stringify(newRows))
    bookRowsContext.setRows(newRows)
  }
  return (
    <div id="overlayAddBook" className="overlay">
      <div className="modal add-book">
        <div className="modal-header">
          <div>Add book</div>
          <div onClick={handleClose} id="closeAddBook">
            X
          </div>
        </div>
        <form ref={formRef}
              id="formAddBook" onSubmit={handleCreateBook}>
          <div className="add-control">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name"/>
          </div>
          <div className="add-control">
            <label htmlFor="author">Author</label>
            <input type="text" name="author" id="author"/>
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
            <button type="submit" id="createBook">Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}
