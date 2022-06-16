import React, { useState } from 'react'
import './styles.css';

function ToggleDetails() {

    const [state, setState] = useState(false)

    const toggle = () => {
        setState(!state)  
    }

  return (
    <div>
        <button className="btn" onClick={toggle}>{ state ? "ON" : "OFF" }</button>
        <p>{ state ? "orem Ipsum is simply dummy text of the printing  desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." : ""}</p>
    </div>
  )
}

export default ToggleDetails
