import "./styles/style.css";
import "./styles/search.css";
import "./styles/modal.css";
import "./styles/profile.css";
import "./styles/toogle.css";
import MainComponent from "./components/base/main.component";

import { useState } from "react";
import { BooksContext } from "./contexts/books.context";
import {
  GetBooksFromLocalStorage,
  GetModeFromLocalStorage,
} from "./utils/localstore";
import { ModeContext } from "./contexts/mode.context";
import { CLASS_NAMES } from "./contants/classes.constant";
import AddBookModal from "./components/modals/add-book.modal";
import DeleteBookModal from "./components/modals/delete-book.modal";

function App() {
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);
  const [visibleAddModal, setVisibleAddModal] = useState(false);
  const [books, setBooks] = useState(GetBooksFromLocalStorage());
  const [deleteBook, setDeleteBook] = useState({
    id: -1,
    name: "",
  });
  const [start, setStart] = useState(0);
  const [mode, setMode] = useState(
    GetModeFromLocalStorage() ?? CLASS_NAMES.light,
  );
  const [itemOffset, setItemOffset] = useState(0);
  return (
    <>
      <ModeContext.Provider
        value={{
          mode,
          setMode,
        }}
      >
        <BooksContext.Provider
          value={{
            books,
            setBooks,
            setStart,
            start,
            deleteBook,
            setDeleteBook,
            showDeleteOverlay: setVisibleDeleteModal,
            showAddOverlay: setVisibleAddModal,
            itemOffset,
            setItemOffset,
          }}
        >
          <div className={mode}>
            <MainComponent />
            {visibleAddModal && <AddBookModal />}
            {visibleDeleteModal && <DeleteBookModal />}
          </div>
        </BooksContext.Provider>
      </ModeContext.Provider>
    </>
  );
}

export default App;
