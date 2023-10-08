import CellComponent from './cell.component'

export default function BookComponent({
  id,
  author,
  name,
  topic,
  actionElement,
}) {
  return (
    <tr>
      {[author, name, topic, actionElement].map((prop, index) => (
        <CellComponent key={`${id}-${index}-book-prop`} value={prop} />
      ))}
    </tr>
  )
}
