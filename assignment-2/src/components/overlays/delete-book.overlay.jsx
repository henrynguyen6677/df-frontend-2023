export default function DeleteBookOverlay() {
  return (
    <div id="overlayDeleteBook" className="overlay">
      <div className="modal delete-book">
        <div className="modal-header">
          <div>Delete book</div>
          <div id="closeDeleteBook">
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
        <div id="areaDeleteBook"></div>
        <div className="add-control buttons">
          <button id="delete" className="button-delete">Delete</button>
          <button id="cancel"  >Cancel</button>
        </div>

      </div>
    </div>
  )

}
