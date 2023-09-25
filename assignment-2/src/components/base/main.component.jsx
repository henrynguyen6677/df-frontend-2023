import {ID_NAMES} from "../../contants/ids.constant";
import {CLASS_NAMES} from "../../contants/classes.constant";
import TableComponent from "../table/table.component";
import SearchComponent from "../search/search.component";
import {useState} from "react";
import {bookstore} from "../../seed/bookstore";

export default function MainComponent () {
  const [rows, setRows] = useState(bookstore.data)
  return (
    <div id={ID_NAMES.main} className={CLASS_NAMES.backgroundGray}>
      <div id="container">
        <SearchComponent rows={rows} defaultRows={bookstore.data} setRows={setRows}/>
        <TableComponent rows={rows}/>
      </div>

    </div>
  )
}
