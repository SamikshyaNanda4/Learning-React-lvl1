import { useState,useEffect } from "react"

const ParenApp2 = () => {

    const [data,setData]=useState([])
    const [show,setShow]=useState(false)

    useEffect(()=>{
       if(!show){
        async function getData(){
            const response=await fetch("https://jsonplaceholder.typicode.com/todos")
            const data=await response.json()
            if(data && data.length){
                setData(data)
            }
            console.log("fetched")
        }
        getData();
       }
       console.log("rendered")
    
    },[show])


  return (
    <div>
         <button onClick={()=>setShow((s)=>!s)}>{show? "Hide" : "Show"}</button>
         <hr />
      <ul>
        {
            show && (
                data.map((todo,index)=><li key={index}>{`${todo.title}:: ${todo.id}::${todo.completed}`}</li>)
            )
        }
      </ul>
      
     
    </div>
  )
}

export default ParenApp2
