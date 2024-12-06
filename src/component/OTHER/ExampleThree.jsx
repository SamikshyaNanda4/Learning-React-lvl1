import { useEffect, useState } from "react"

const ExampleThree = () => {

const [name,setName]=useState(()=>{
    const savedName=localStorage.getItem("name")
    return savedName? JSON.parse(savedName):"";
})

const handleChange=(e)=>{
    setName(e.target.value)
}

useEffect(()=>{
    localStorage.setItem("name",JSON.stringify(name))
},[name])

const handleClear=()=>setName("")

  return (
    <div>
      <h2>Your name: {name}</h2>\
      <input type="text" value={name} onChange={handleChange} placeholder="ENTER YOUR NAME" />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  )
}

export default ExampleThree
