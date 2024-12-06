import { useEffect, useState } from "react"

const ShoppingList = () => {

    const[lists,setLists]=useState(()=>{
        const savedList=localStorage.getItem("list")
        return savedList ?JSON.parse(savedList):[]
    })
    const [line,setLine]=useState("")


    const handleChange=(e)=>{
        setLine(e.target.value)
    }

    const handleSubmit=()=>{
        setLists((prev)=>{
            return [...prev,line]
        })
        setLine("")
    }

    useEffect(()=>{
        localStorage.setItem("list",JSON.stringify(lists))

    },[lists])

    const removeOneByOne=()=>{
        setLists((prev)=>{
            return prev.filter((item,index)=>index!==0)
            })
    }

  return (
    <div>
        <div>
            {lists.map(list=><p>{list}</p>)}
        </div>
        <label htmlFor="inp">Add list</label>
        <input type="text" id="inp" name="inp" onChange={handleChange} value={line} />
        <button onClick={handleSubmit}>ADD ITEM</button>
        <br />
        <button onClick={removeOneByOne}>REMOVE LAST</button>
    </div>
  )
}

export default ShoppingList
