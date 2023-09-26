import {useContext, useState} from "react";
import {BookRowsContext} from "../../contexts/book-rows.context";

export default function PagingComponent () {
  const FIRST_ITEMS = 3
  const LAST_ITEMS = 1
  const [ firstStart, setFirstStart] = useState(0)
  const [showDots, setShowDots] = useState(true)

  const bookRowsContext = useContext(BookRowsContext)
  const counter = bookRowsContext.rows.length

  const handleSelectItem = (index) => {
    if (index + FIRST_ITEMS < counter) {
      setFirstStart(index)
      bookRowsContext.setStart(index)
    } else {
      setShowDots(false)
    }
  }

  const drawItems = (start, end) => {
    const elements = []
    for (let index = start; index < end; index++) {
      elements.push((
        <div onClick={() => handleSelectItem(index)} className="paging-item" key={index}>
          { index + 1 }
        </div>
      ))
    }
    return elements
  }

  const drawFirst = () => {
    return drawItems(firstStart, firstStart + FIRST_ITEMS)
  }
  const drawDots = () => {
    if (FIRST_ITEMS >= counter) return <></>
    return <div className="paging-dots">..</div>
  }
  const drawLast = (start, end) => {
    if (FIRST_ITEMS >= counter) return <></>
    return drawItems(counter - LAST_ITEMS, counter)

  }

  return (
    <div className="paging-container">
      {drawFirst()}
      {showDots && drawDots()}
      {drawLast()}
    </div>
  )
}
