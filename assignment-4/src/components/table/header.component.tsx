import { bookstore } from '../../seed/bookstore'
import CellComponent from './cell.component'

export default function HeaderComponent() {
  const headerValues = bookstore.header

  return (
    <thead>
      <tr>
        {headerValues.map((headerValue, index) => (
          <CellComponent key={`${headerValue}-${index}`} value={headerValue} />
        ))}
      </tr>
    </thead>
  )
}
