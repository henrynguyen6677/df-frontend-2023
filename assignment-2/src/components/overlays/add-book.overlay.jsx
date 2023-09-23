import {useContext} from "react";
import {OverlayContext} from "../../contexts/overlay.context";

export default function AddBookOverlay () {
  const overlayContext = useContext(OverlayContext)

  const handleClose = () => overlayContext.showAddOverlay(false)

  return (
    <div id="overlayAddBook" className="overlay">
      <div className="modal add-book">
        <div className="modal-header">
          <div>Add book</div>
          <div onClick={handleClose} id="closeAddBook">
            X
          </div>
        </div>
        <form id="formAddBook">
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
