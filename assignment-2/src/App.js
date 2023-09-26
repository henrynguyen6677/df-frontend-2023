import './styles/style.css'
import './styles/search.css'
import './styles/modal.css'
import './styles/profile.css'
import './styles/toogle.css'
import MainComponent from "./components/base/main.component";
import AddBookOverlay from "./components/overlays/add-book.overlay";
import DeleteBookOverlay from "./components/overlays/delete-book.overlay";
import {useState} from "react";
import {OverlayContext} from "./contexts/overlay.context";
import {BookRowsContext} from "./contexts/book-rows.context";
import {LocalStorage} from "./utils/localstore";
import {BOOKS} from "./contants/storage";
function App() {
  const [visibleDeleteOverlay , setVisibleDeleteOverlay] = useState(false)
  const [visibleAddOverlay , setVisibleAddOverlay] = useState(false)
  const [rows, setRows] = useState(JSON.parse(LocalStorage.getItem(BOOKS)))
  const [start, setStart] = useState(0)
  return (
    <>
      <OverlayContext.Provider value={{
        showDeleteOverlay: setVisibleDeleteOverlay,
        showAddOverlay: setVisibleAddOverlay
      }}>
        <BookRowsContext.Provider value={{
          rows,
          setRows,
          setStart,
          start
        }}>
          <MainComponent/>
          {
            visibleAddOverlay && <AddBookOverlay />
          }
          {
            visibleDeleteOverlay && <DeleteBookOverlay />
          }
        </BookRowsContext.Provider>

      </OverlayContext.Provider>

    </>
  );
}

export default App;
