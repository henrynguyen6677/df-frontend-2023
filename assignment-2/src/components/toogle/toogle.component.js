import {useState} from "react";

export default function ToogleComponent () {

  const [toogle, setToogle] = useState(false)
  const handleToogle = () => {
    setToogle(!toogle)
  }
  return (
    <div >
      <label className="switch">
        <input type="checkbox" checked={toogle}/>
        <span onClick={handleToogle} className="slider round"></span>
      </label>
    </div>

  )
}
