import {useContext} from "react";
import {OverlayContext} from "../../contexts/overlay.context";

export default function DeleteBookOverlay() {
  const overlayContext = useContext(OverlayContext)
  const handleClose = () => overlayContext.showDeleteOverlay(false)
  return (
    <div id="overlayDeleteBook" className="overlay">
      <div className="modal delete-book">
        <div className="modal-header">
          <div>Delete book</div>
          <div onClick={handleClose} id="closeDeleteBook">
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
        <div id="areaDeleteBook"></div>
        <div className="add-control buttons">
          <button id="delete" className="button-delete">Delete</button>
          <button onClick={handleClose} id="cancel"  >Cancel</button>
        </div>

      </div>
    </div>
  )

}
