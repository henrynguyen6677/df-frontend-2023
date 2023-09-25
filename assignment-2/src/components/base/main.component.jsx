import {ID_NAMES} from "../../contants/ids.constant";
import {CLASS_NAMES} from "../../contants/classes.constant";
import TableComponent from "../table/table.component";
import SearchComponent from "../search/search.component";
import {LocalStorage} from "../../utils/localstore";
import {BOOKS} from "../../contants/storage";

export default function MainComponent () {

  return (
    <div id={ID_NAMES.main} className={CLASS_NAMES.backgroundGray}>
      <div id="container">
        <SearchComponent defaultRows={JSON.parse(LocalStorage.getItem(BOOKS))}/>
        <TableComponent/>
      </div>

    </div>
  )
}
