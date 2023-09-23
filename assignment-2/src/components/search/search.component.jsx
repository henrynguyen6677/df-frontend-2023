import {useContext} from "react";
import {OverlayContext} from "../../contexts/overlay.context";

export default function SearchComponent () {
  const overlayContext = useContext(OverlayContext)
  const handleAdd = () => overlayContext.showAddOverlay(true)
  return (
    <div id="search">
      <input id="searchInput" placeholder="Search books"/>
      <button onClick={handleAdd} id="addBook">Add book</button>
    </div>
  )
}
