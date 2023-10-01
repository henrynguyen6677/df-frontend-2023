import { CLASS_NAMES } from "../../contants/classes.constant";
import { useContext } from "react";
import { OverlayContext } from "../../contexts/overlay.context";
import { GlobalData } from "../../utils/localstore";

export default function DeleteComponent({ id, name }) {
  const overlayContext = useContext(OverlayContext);
  const openPopupDelete = (id, name) => {
    GlobalData.deleteBook = {
      id,
      name,
    };
    overlayContext.showDeleteOverlay(true);
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
