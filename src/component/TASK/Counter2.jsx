import { useEffect, useState } from "react"

const Counter2 = () => {
    const[count,setCount]=useState(()=>{
        const c=localStorage.getItem("count");
        return c?JSON.parse(parseInt(c)):0;
    })

    useEffect(()=>{
        localStorage.setItem("count",JSON.stringify(count))
        },[count])

    const handleChange=()=>{
        setCount((c)=>c+1)
    }

    const handleClear=()=>{
        setCount(0);
        localStorage.removeItem("count")
    }

  return (
    <div>
         <h2>Count is: {count}</h2>   
        <button onClick={handleChange}>INCREMENT</button>
        <button onClick={handleClear}>Reset</button>
    </div>
  )
}

export default Counter2
