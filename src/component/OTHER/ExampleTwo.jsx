import { useState } from "react"

const ExampleTwo = () => {
    const [randomNumber,setRandomNumber]=useState(()=>Math.floor(Math.random()*100))


    const newRandomNumber=()=>{
        setRandomNumber(Math.floor(Math.random()*100))
    }

  return (
    <div style={{backgroundColor:"teal",width:"240px", color:"white"}}>
       <h2 >
      {randomNumber}
    </h2>
    <button onClick={newRandomNumber}>Generate Random Number</button>
    </div>

 
  )
}

export default ExampleTwo
