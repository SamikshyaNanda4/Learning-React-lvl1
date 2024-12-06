import { useState } from "react";

const ExampleOne=()=>{
    const [count, setCount] = useState(()=>{
        const initialCount=15
        return initialCount
    });

    const increment=()=>{
        setCount(p=>p+1)
    }

return(
    <div style={{width:"200px",backgroundColor:"aqua"}}>
    <h5>EXAMPLE ONE</h5>
    <p>Count: {count}</p>
    <button onClick={increment}>INCREMENT</button>
    </div>
)
}

export default ExampleOne;