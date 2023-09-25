import {CLASS_NAMES} from "../../contants/classes.constant";
import {bookstore} from "../../seed/bookstore";
import {useContext} from "react";
import {OverlayContext} from "../../contexts/overlay.context";


export default function TableComponent () {
  const overlayContext = useContext(OverlayContext)
  const factoryDraw = (() => {
    const initHeader = (values) => {
      const cells = values.map((value) => {
        return (
            <th>
              {value}
            </th>
        )
      })
      return (
        <tr className={CLASS_NAMES.header}>
          {cells}
        </tr>
      )
    }
    const initRow = (values) => {
      const cells = values.map((value) => {
        return (
          <td>
            {value}
          </td>
        )
      })
      return (
        <tr>
          {cells}
        </tr>
      )
    }
    return {
      initHeader, initRow
    }
  })()

  const drawTableHeader = () => {
    const { initHeader } = factoryDraw
    return initHeader(bookstore.header)
  }

  // const drawTableItems = (data = bookstore.data) => {
  //   const { initRow } = factoryDraw
  //
  //   data.forEach(({ id, author, name, topic }) => {
  //     const deleteElement = document.createElement('div')
  //     deleteElement.append('Delete')
  //     deleteElement.className = CLASS_NAMES.deleteItem
  //     deleteElement.addEventListener('click', () => openPopupDelete(id, name))
  //     const item = initRow(Object.values({ name, author, topic, deleteElement }))
  //     global.container.appendChild(item)
  //   })
  // }
  const openPopupDelete = (id, name) => {
    // global.areaDeleteBook.innerHTML = `Do you want to delete <b>${name}</b> book?`
    // global.idForDeleteBook = id;
    // global.overlayDeleteBook.style.visibility = CSS_PROPS.visible
    // TODO: Show modal
    // Set message
    overlayContext.showDeleteOverlay(true)

  }
  const drawTableItems = (data = bookstore.data) => {
    const { initRow } = factoryDraw

    return data.map(({ id, author, name, topic }) => {
        const deleteElement =
          <div className={CLASS_NAMES.deleteItem} onClick={() => openPopupDelete(id, name)} >
            Delete
          </div>
        return initRow(Object.values({ name, author, topic, deleteElement }))
      })
  }

  return <>
    <table>
      {drawTableHeader()}
      {drawTableItems()}
    </table>

  </>
}
