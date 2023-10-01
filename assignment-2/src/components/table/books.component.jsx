import { useContext } from "react";
import { BookRowsContext } from "../../contexts/book-rows.context";
import BookComponent from "./book.component";
import DeleteComponent from "./delete.component";

export default function BooksComponent() {
  const bookRowsContext = useContext(BookRowsContext);
  const { books } = bookRowsContext;

  return (
    <tbody>
      {books.map(({ id, author, name, topic }) => {
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
