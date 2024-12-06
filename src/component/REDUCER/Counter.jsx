import { useReducer,useState } from "react";
import CounterReducer from "./CounterReducer";
import { initialValue } from "./CounterReducer";


const Counter = () => {
    const [count, dispatch] = useReducer(CounterReducer, initialValue);
    const [amount,setAmount]=useState(0)

    const handleSubmit=(e)=>{
       if(e.target.name==="increment"){
        dispatch({type:'INCREMENTBY?',payload:parseInt(amount)})
       } 
        else if(e.target.name==="decrement"){
        dispatch({type:"DECREMENTBY?",payload:parseInt(amount)})
        setAmount(0)
        }
    }


  return (
    <div>
        <button onClick={()=>{
            dispatch({type:'INCREMENT'})
        }}>PLUS</button>
        <button onClick={()=>{
            dispatch({type:'DECREMENT'})
        }}>MINUS</button>
        <button onClick={()=>dispatch({type:"INCREMENTBY2"})}>+2</button>
        <button onClick={()=>dispatch({type:"DECREMENTBY2"})}>-2</button>
        <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
        <hr />
        <input type="number" placeholder="increment by amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <button name="increment" onClick={handleSubmit}>CUSTOM INCREMENT</button>
        <button name="decrement" onClick={handleSubmit}>CUSTOM DECREMENT</button>
      <h2>Count is: {count}</h2>
    </div>
  )
}

export default Counter
