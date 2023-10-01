import { useContext } from 'react';
import { ModeContext } from '../../contexts/mode.context';
import { CLASS_NAMES } from '../../contants/classes.constant';
import { SetModeToLocalStorage } from '../../utils/localstore';

export default function ToogleComponent() {
  const { mode, setMode } = useContext(ModeContext);
  const handleToogle = () => {
    const modeValue =
      mode === CLASS_NAMES.light ? CLASS_NAMES.dark : CLASS_NAMES.light;
    setMode(modeValue);
    SetModeToLocalStorage(modeValue);
  };
  return (
    <div>
      <label className="switch" htmlFor="checkbookMode">
        <input
          type="checkbox"
          id="checkbookMode"
          checked={mode === CLASS_NAMES.light}
        />
        <button
          type="button"
          onClick={handleToogle}
          aria-label="Slider"
          className="slider round"
        />
      </label>
    </div>
  );
}
