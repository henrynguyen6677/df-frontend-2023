import { CLASS_NAMES } from "../../contants/classes.constant";
import { bookstore } from "../../seed/bookstore";
import CellComponent from "./cell.component";

export default function HeaderComponent() {
  const values = bookstore.header;

  return (
    <thead>
      <tr className={CLASS_NAMES.header}>
        {values.map((value, index) => (
          <CellComponent key={`${value}-${index}`} value={value} />
        ))}
      </tr>
    </thead>
  );
}
