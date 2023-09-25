import {useContext} from "react";
import {OverlayContext} from "../../contexts/overlay.context";
import PropTypes from "prop-types";

export default function SearchComponent ({ rows, defaultRows, setRows }) {
  const handleFilter = (e) => {
    const value = e.target.value
    if (value === '' && rows.length === 0) {
      setRows(defaultRows)
      return;
    }
    const newRows = defaultRows?.filter((item) =>
      item.name.includes(value) ||
      item.author.includes(value) ||
      item.topic.includes(value)).map(item => item)
    setRows(newRows)
  }

  const overlayContext = useContext(OverlayContext)
  const handleAdd = () => overlayContext.showAddOverlay(true)

  return (
    <div id="search">
      <input id="searchInput" onChange={handleFilter} placeholder="Search books"/>
      <button onClick={handleAdd} id="addBook">Add book</button>
    </div>
  )
}

SearchComponent.propsType = {
  rows: PropTypes.array,
  defaultRows: PropTypes.array,
  setRows: PropTypes.func
}
