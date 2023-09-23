import './styles/style.css'
import './styles/search.css'
import './styles/modal.css'
import MainComponent from "./components/base/main.component";
import AddBookOverlay from "./components/overlays/add-book.overlay";
import DeleteBookOverlay from "./components/overlays/delete-book.overlay";
import {useState} from "react";
import {OverlayContext} from "./contexts/overlay.context";
function App() {
  const [visibleDeleteOverlay , setVisibleDeleteOverlay] = useState(false)
  const [visibleAddOverlay , setVisibleAddOverlay] = useState(false)

  return (
    <>
      <OverlayContext.Provider value={{
        dispatch: setVisibleDeleteOverlay
      }}>
        <MainComponent/>
        {
          visibleAddOverlay && <AddBookOverlay />
        }
        {
          visibleDeleteOverlay && <DeleteBookOverlay />
        }
      </OverlayContext.Provider>

    </>
  );
}

export default App;
