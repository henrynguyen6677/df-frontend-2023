import HeaderComponent from './header.component'
import BooksComponent from './books.component'

export default function TableComponent() {
  return (
    <table className="w-full">
      <HeaderComponent />
      <BooksComponent />
    </table>
  )
}
