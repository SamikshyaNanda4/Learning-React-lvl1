import { useState,useEffect } from "react"


const ParenApp = () => {
     const [value,setValue]=useState(0)
     const [something,setSomething]=useState(0)

     useEffect(()=>{
        console.log("called use Effect");
        document.title=`increment ${value}`
     },[value,something])
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={()=>setValue(value+1)}> CLICK ME</button>
      <button onClick={()=>setSomething(something+1)}>
        INCREMENT BY SOMEHTHING
      </button>
    </div>
  )
}

export default ParenApp
