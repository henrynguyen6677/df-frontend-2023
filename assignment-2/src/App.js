import './styles/style.css'
import './styles/search.css'
import './styles/modal.css'
import MainComponent from "./components/base/main.component";
import AddBookOverlay from "./components/overlays/add-book.overlay";
import DeleteBookOverlay from "./components/overlays/delete-book.overlay";
function App() {
  return (
    <>
      <MainComponent/>
      <AddBookOverlay />
      <DeleteBookOverlay/>
    </>
  );
}

export default App;
