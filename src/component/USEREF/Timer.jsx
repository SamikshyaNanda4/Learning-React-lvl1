import { useRef,useEffect,useState } from "react"

const Timer = () => {
    const [countMin,setCountMin]=useState(0)
    const[count,setCount]=useState(0)
    const intervalRef=useRef(null)
    const minIntervalRef=useRef(null)

    useEffect(()=>{

        minIntervalRef.current=setInterval(()=>{
            setCountMin((p)=>p+1)
        },1000*60)
       
        intervalRef.current=setInterval(()=>{
            setCount((prev)=>prev==59?0:prev+1)
        },1000)

        return()=>{
            clearInterval(intervalRef.current)
            clearInterval(minIntervalRef.current)
        }

    }
    
    ,[])

  return (
  <>
    <span>
      Timer-- {countMin}:{count}
    </span>

    

        <button onClick={()=>clearInterval(intervalRef.current)}> 
            Stop Timer
        </button>
  </>
  )
}

export default Timer
