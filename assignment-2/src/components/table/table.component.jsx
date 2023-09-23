import {CLASS_NAMES} from "../../contants/classes.constant";
import {bookstore} from "../../seed/bookstore";


export default function TableComponent () {

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
      return initItemCells(values, CLASS_NAMES.item)
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

  const drawTableItems = () => {

  }

  return <>{drawTableHeader()}</>
}
