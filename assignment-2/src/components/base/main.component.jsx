import { ID_NAMES } from "../../contants/ids.constant";
import TableComponent from "../table/table.component";
import SearchComponent from "../search/search.component";
import { LocalStorage } from "../../utils/localstore";
import { BOOKS } from "../../contants/storage";
import PagingComponent from "../paging/paging.component";
import ProfileComponent from "../profile/profile.component";

export default function MainComponent() {
  return (
    <div id={ID_NAMES.main}>
      <div id="container">
        <ProfileComponent />
        <SearchComponent
          defaultBooks={JSON.parse(LocalStorage.getItem(BOOKS))}
        />
        <TableComponent />
        <PagingComponent />
      </div>
    </div>
  );
}
