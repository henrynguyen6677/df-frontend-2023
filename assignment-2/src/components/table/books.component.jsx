import { useContext } from "react";
import { BooksContext } from "../../contexts/books.context";
import BookComponent from "./book.component";
import DeleteComponent from "./delete.component";
import { ITEMS_PER_PAGE } from "../../contants/paging.constant";

export default function BooksComponent() {
  const bookRowsContext = useContext(BooksContext);
  const { books, itemOffset } = bookRowsContext;
  const endOffset = itemOffset + ITEMS_PER_PAGE;
  return (
    <tbody>
      {books.slice(itemOffset, endOffset).map(({ id, author, name, topic }) => {
        return (
          <BookComponent
            key={id}
            id={id}
            name={name}
            author={author}
            topic={topic}
            deleteElement={<DeleteComponent id={id} name={name} />}
          />
        );
      })}
    </tbody>
  );
}
