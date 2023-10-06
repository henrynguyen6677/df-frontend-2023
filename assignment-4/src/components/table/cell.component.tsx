export default function CellComponent({ value }) {
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
