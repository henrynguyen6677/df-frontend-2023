import { useContext } from 'react'
import { ModeContext } from '../../contexts/mode.context'
import { CLASS_NAMES } from '../../contants/classes.constant'
import { setModeToLocalStorage } from '../../utils/localstore'

export default function ThemeToggleInputComponent() {
  const { mode, setMode } = useContext(ModeContext)
  const handleToggle = () => {
    const modeValue =
      mode === CLASS_NAMES.light ? CLASS_NAMES.dark : CLASS_NAMES.light
    setMode(modeValue)
    setModeToLocalStorage(modeValue)
  }
  return (
    <div>
      <label className="switch" htmlFor="checkbookMode">
        <input
          type="checkbox"
          id="checkbookMode"
          defaultChecked={mode === CLASS_NAMES.light}
        />
        <button
          type="button"
          onClick={handleToggle}
          aria-label="Slider"
          className="slider round"
        />
      </label>
    </div>
  )
}
