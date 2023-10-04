import { CLASS_NAMES } from '../../contants/classes.constant'
import { bookstore } from '../../seed/bookstore'
import CellComponent from './cell.component'

export default function HeaderComponent() {
  const headerValues = bookstore.header

  return (
    <thead>
      <tr className={CLASS_NAMES.header}>
        {headerValues.map((headerValue, index) => (
          <CellComponent key={`${headerValue}-${index}`} value={headerValue} />
        ))}
      </tr>
    </thead>
  )
}
