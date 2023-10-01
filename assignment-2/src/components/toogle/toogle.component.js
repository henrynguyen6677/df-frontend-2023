import { useContext } from "react";
import { ModeContext } from "../../contexts/mode.context";
import { CLASS_NAMES } from "../../contants/classes.constant";

export default function ToogleComponent() {
  const { mode, setMode } = useContext(ModeContext);
  const handleToogle = () => {
    const modeValue =
      mode === CLASS_NAMES.light ? CLASS_NAMES.dark : CLASS_NAMES.light;
    setMode(modeValue);
  };
  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={mode === CLASS_NAMES.light} />
        <span onClick={handleToogle} className="slider round"></span>
      </label>
    </div>
  );
}
