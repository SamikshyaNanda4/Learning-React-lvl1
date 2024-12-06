import UserContext from "./UserContext"
import { useState,useContext } from "react"
const UpdateUser = () => {
    const{updateUser}=useContext(UserContext)
    const[newName,setNewName]=useState("")

const handleSubmit=(e)=>{
    e.preventDefault()
    if(newName.trim()){
        updateUser(newName)
        setNewName("")
    }
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newName} onChange={(e)=>setNewName(e.target.value)} placeholder="Enter new Name" />
        <button type="submit" >Update</button>
      </form>
    </div>
  )
}

export default UpdateUser
