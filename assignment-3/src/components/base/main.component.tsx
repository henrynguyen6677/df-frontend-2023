import { ID_NAMES } from '../../contants/ids.constant';
import TableComponent from '../table/table.component';
import SearchComponent from '../search/search.component';
import { getBooksFromLocalStorage } from '../../utils/localstore';
import PagingComponent from '../paging/paging.component';
import ProfileComponent from '../profile/profile.component';

export default function MainComponent() {
  return (
    <div id={ID_NAMES.main}>
      <div id="container">
        <ProfileComponent />
        <SearchComponent defaultBooks={getBooksFromLocalStorage()} />
        <TableComponent />
        <PagingComponent />
      </div>
    </div>
  );
}
