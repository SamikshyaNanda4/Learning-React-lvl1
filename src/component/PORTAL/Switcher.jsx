import { useState } from "react"


const Switcher = () => {
    const [sw,setSw]=useState(false)
  return (
    <div>
        {
          sw?(
            <span>Dark</span>
          ):(
            <span>Light</span>
          )
        }
        <br />

        <input type="text" placeholder={sw?"This is Dark":"This is Light"} key={sw? "dark":"light"} />
        <button onClick={()=>setSw((s)=>!s)}>SWITCH</button>
    </div>
  )
}

export default Switcher
