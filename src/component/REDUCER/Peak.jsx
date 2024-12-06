import { useReducer } from "react"

const initialState={
    // Notification:"xyz",
    count:0
};

const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,count:state.count +1}
        case 'decrement':
            return {...state,count:state.count -1}
        case 'reset':
            return {...state,count:0}
        default:
        break
    }
}

const Peak = () => {
const [state,dispatch]=useReducer(reducer, initialState)

  return (
    <div>
        <button onClick={()=> dispatch({type:"increment"})}>+</button>
        <button onClick={()=> dispatch({type:"decrement"})}>-</button>
        <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
      <h2>
       Count: {state.count}
        </h2>
    </div>
  )
}

export default Peak
