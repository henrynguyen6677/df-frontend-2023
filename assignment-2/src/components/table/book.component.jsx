import CellComponent from "./cell.component";

export default function BookComponent({
  id,
  author,
  name,
  topic,
  deleteElement,
}) {
  return (
    <tr>
      {[author, name, topic, deleteElement].map((prop) => (
        <CellComponent key={`${id}-book-prop`} value={prop} />
      ))}
    </tr>
  );
}
