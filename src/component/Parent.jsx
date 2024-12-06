import { useState } from "react"
import Child from "./Child"

const Parent = () => {
    const[count,setCount]=useState(0)


  return (
    <div>
        <Child count={count} onClickHandler={()=>setCount(count+1)}/>
    </div>
  )
}

export default Parent
