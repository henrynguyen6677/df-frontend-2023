import { ID_NAMES } from "../../contants/ids.constant";
import TableComponent from "../table/table.component";
import SearchComponent from "../search/search.component";
import { GetBooksFromLocalStorage, LocalStorage } from "../../utils/localstore";
import { BOOKS } from "../../contants/storage";
import PagingComponent from "../paging/paging.component";
import ProfileComponent from "../profile/profile.component";
import { JSONStringToObject } from "../../utils/parse.helper";

export default function MainComponent() {
  return (
    <div id={ID_NAMES.main}>
      <div id="container">
        <ProfileComponent />
        <SearchComponent defaultBooks={GetBooksFromLocalStorage()} />
        <TableComponent />
        <PagingComponent />
      </div>
    </div>
  );
}
