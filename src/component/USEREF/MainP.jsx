import { useRef } from "react"
import Timer from "./Timer.jsx";


const MainP = () => {
    const inputElement=useRef(null)

    const focusInput=()=>{
        inputElement.current.focus()
        inputElement.current.value="Miko San"
    }

  return (

            <div>
        <input type="text" ref={inputElement} /> 
        <button onClick={()=>focusInput()}>Focus</button>
        <Timer/>
    </div>
  
  )
}

export default MainP
