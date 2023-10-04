'use client'

import ProfileComponent from '../../components/profile/profile.component'
import SearchComponent from '../../components/search/search.component'
import { getBooksFromLocalStorage } from '../../utils/localstore'
import TableComponent from '../../components/table/table.component'
import PagingComponent from '../../components/paging/paging.component'

export default function Detail() {
  return (
    <>
      <ProfileComponent />
      <SearchComponent defaultBooks={getBooksFromLocalStorage()} />
      <TableComponent />
      <PagingComponent />
    </>
  )
}
