import React, { useState } from 'react'

const Counter = () => {
    const[counter,setCounter]=useState(0);
  return (
    <>
     <div>
        {counter}
      </div>
      <button onClick={()=>{setCounter((c)=>c+1)}}>CLICK ME</button>    
      <button onClick={()=>{setCounter((c)=>c>0?c-1:c)}}>CLICK ME</button>
    </>
   
  )
}

export default Counter
