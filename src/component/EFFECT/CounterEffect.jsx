import {useState, useEffect } from "react";

const CounterEffect = () => {
const [count, setCount] = useState(0);


useEffect(()=>{
    document.title=`Count: ${count}`
},[count])


  return (
    <>
    <section>
        <h1>Count: {count}</h1>
    </section>
    <div>
      Counter Effect
    </div>
    <button onClick={()=>{setCount(count+1)}}>
        INCREMENT
    </button>
    <button onClick={()=>{setCount((p)=>p>0?p-1:p)}}>DECREMENT</button>
    </>
  )
}

export default CounterEffect
