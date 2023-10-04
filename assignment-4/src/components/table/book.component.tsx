import CellComponent from './cell.component'

export default function BookComponent({
  id,
  author,
  name,
  topic,
  deleteElement,
}) {
  return (
    <tr>
      {[author, name, topic, deleteElement].map((prop, index) => (
        <CellComponent key={`${id}-${index}-book-prop`} value={prop} />
      ))}
    </tr>
  )
}
