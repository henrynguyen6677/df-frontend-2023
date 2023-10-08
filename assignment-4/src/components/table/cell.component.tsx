import { ReactElement } from 'react'

export default function CellComponent({
  value,
}: {
  value: string | number | ReactElement
}) {
  return (
    <th
      className="
        border-solid
        border-2
        text-left
        p-2
      "
    >
      {value}
    </th>
  )
}
