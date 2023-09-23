import {CLASS_NAMES} from "../../contants/classes.constant";
import {bookstore} from "../../seed/bookstore";
import {useContext} from "react";
import {OverlayContext} from "../../contexts/overlay.context";


export default function TableComponent () {
  const overlayContext = useContext(OverlayContext)
  const factoryDraw = (() => {
    const initItemCells = (values, className) => {
      const classNameMapping = CLASS_NAMES.mappingCellClass;
      return values.map((value, index) => {
        return (
          <div className={CLASS_NAMES.itemCell}>
            <div className={classNameMapping[index]}>
              {value}
            </div>
          </div>
        )
      })
    }
    const initHeader = (values) => {
      const classNameMapping = CLASS_NAMES.mappingCellClass;
      const cells = values.map((value, index) => {
        const classNames = [CLASS_NAMES.itemCell, classNameMapping[index]]
        return (
            <div className={classNames.join(' ')}>
              {value}
            </div>
        )
      })
      return (
        <div className={CLASS_NAMES.header}>
          {cells}
        </div>
      )
    }
    const initRow = (values) => {
      const classNameMapping = CLASS_NAMES.mappingCellClass;
      const cells = values.map((value, index) => {
        const classNames = [CLASS_NAMES.itemCell, classNameMapping[index]]
        return (
          <div className={classNames.join(' ')}>
            {value}
          </div>
        )
      })
      return (
        <div className={CLASS_NAMES.header}>
          {cells}
        </div>
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
    overlayContext.dispatch(true)

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
    {drawTableHeader()}
    {drawTableItems()}
  </>
}
