import { useState } from "react"


const TodoList = () => {
    const [todo,setTodo]=useState([])
    const  [val,setVal]=useState("")

const submitHandler=(e)=>{
    e.preventDefault();
    setTodo([...todo,val])
    setVal("");
}

const handleInputChange=(e)=>{
    setVal(e.target.value)
}

  return (
    <div>
      <form onSubmit={submitHandler}>
       <label htmlFor="inp">
        CREATE TODO
       </label>
       <input type="text" placeholder="add todo" name="inp" value={val}  onChange={handleInputChange}/>
       <input type="submit"/>
      </form>
      {
        todo.map(t=><p>{t}</p>)
      }
    </div>
  )
}

export default TodoList
