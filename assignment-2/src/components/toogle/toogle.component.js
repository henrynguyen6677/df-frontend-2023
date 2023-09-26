import {useContext, useState} from "react";
import {ModeContext} from "../../contexts/mode.context";
import {CLASS_NAMES} from "../../contants/classes.constant";

export default function ToogleComponent () {
  const modeContext = useContext(ModeContext)
  const [toogle, setToogle] = useState(CLASS_NAMES.light)
  const handleToogle = () => {
    const modeValue = toogle === CLASS_NAMES.light ?
      CLASS_NAMES.dark :
      CLASS_NAMES.light
    setToogle(modeValue)
    modeContext.setMode(modeValue)
  }
  return (
    <div >
      <label className="switch">
        <input type="checkbox" checked={toogle === CLASS_NAMES.light}/>
        <span onClick={handleToogle} className="slider round"></span>
      </label>
    </div>

  )
}
