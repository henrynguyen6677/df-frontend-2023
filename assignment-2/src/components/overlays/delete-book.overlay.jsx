import {useContext} from "react";
import {OverlayContext} from "../../contexts/overlay.context";
import {GlobalData, LocalStorage} from "../../utils/localstore";
import {BookRowsContext} from "../../contexts/book-rows.context";
import {BOOKS} from "../../contants/storage";

export default function DeleteBookOverlay() {
  const overlayContext = useContext(OverlayContext)
  const bookRowsContext = useContext(BookRowsContext)
  const handleClose = () => overlayContext.showDeleteOverlay(false)
  const handleDelete = () => {
    const { id } = GlobalData.deleteBook
    const rows = JSON.parse(LocalStorage.getItem(BOOKS))
    const index = rows.findIndex((book) => book.id === id)
    if (index < -1) return;
    rows.splice(index, 1)
    bookRowsContext.setRows(rows)
    LocalStorage.setItem(BOOKS, JSON.stringify(rows))
    handleClose()
  }

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
          <b>{GlobalData.deleteBook.name}</b>
          <span> book?</span>
        </div>
        <div className="add-control buttons">
          <button onClick={handleDelete} id="delete" className="button-delete">Delete</button>
          <button onClick={handleClose} id="cancel"  >Cancel</button>
        </div>

      </div>
    </div>
  )

}
