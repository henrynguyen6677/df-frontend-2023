import { CLASS_NAMES } from "../../contants/classes.constant";
import { useContext } from "react";
import { BooksContext } from "../../contexts/books.context";

export default function DeleteComponent({ id, name }) {
  const booksContext = useContext(BooksContext);
  const openPopupDelete = (id, name) => {
    booksContext.setDeleteBook({
      id,
      name,
    });
    booksContext.showDeleteOverlay(true);
  };
  return (
    <div
      className={CLASS_NAMES.deleteItem}
      onClick={() => openPopupDelete(id, name)}
    >
      Delete
    </div>
  );
}
