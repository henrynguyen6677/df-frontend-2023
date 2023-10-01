import "./styles/style.css";
import "./styles/search.css";
import "./styles/modal.css";
import "./styles/profile.css";
import "./styles/toogle.css";
import MainComponent from "./components/base/main.component";

import { useState } from "react";
import { OverlayContext } from "./contexts/overlay.context";
import { BookRowsContext } from "./contexts/book-rows.context";
import { LocalStorage } from "./utils/localstore";
import { BOOKS } from "./contants/storage";
import { ModeContext } from "./contexts/mode.context";
import { CLASS_NAMES } from "./contants/classes.constant";
import AddBookModal from "./components/modals/add-book.modal";
import DeleteBookModal from "./components/modals/delete-book.modal";

function App() {
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);
  const [visibleAddModal, setVisibleAddModal] = useState(false);
  const [books, setBooks] = useState(JSON.parse(LocalStorage.getItem(BOOKS)));
  const [start, setStart] = useState(0);
  const [mode, setMode] = useState(CLASS_NAMES.light);
  return (
    <>
      <ModeContext.Provider
        value={{
          mode,
          setMode,
        }}
      >
        <OverlayContext.Provider
          value={{
            showDeleteOverlay: setVisibleDeleteModal,
            showAddOverlay: setVisibleAddModal,
          }}
        >
          <BookRowsContext.Provider
            value={{
              books,
              setBooks,
              setStart,
              start,
            }}
          >
            <div className={mode}>
              <MainComponent />
              {visibleAddModal && <AddBookModal />}
              {visibleDeleteModal && <DeleteBookModal />}
            </div>
          </BookRowsContext.Provider>
        </OverlayContext.Provider>
      </ModeContext.Provider>
    </>
  );
}

export default App;
