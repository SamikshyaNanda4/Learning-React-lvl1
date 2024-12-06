import { useState,useCallback, useEffect } from "react"

const BasicUseEffect= () => {


    useEffect(()=>{
        console.log("Basic Effect Component Mounted");

    },[])

  return (
    <div>
      <h3>Check the console to see the messahe</h3>
    </div>
  )
}

export default ParenApp3
