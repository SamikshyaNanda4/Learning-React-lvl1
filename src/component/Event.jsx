import React, { useState } from 'react'

const Btn=()=>{
    
   

    const[name,setName]=useState();
    const [isActive,setIsActive]=useState(false)

    const buttonStyle = {
        backgroundColor: isActive ? '#ff5733' : '#4CAF50', 
        transform: isActive ? 'scale(1.1)' : 'scale(1)',   
        transition: 'all 0.2s ease', 
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        cursor: 'pointer',
      }

    
    const  handleClick=()=>{
       setName(Math.floor(Math.random()*11));
       activeHandle();
    }

    const activeHandle=()=>{
        setIsActive(true)
        setTimeout(()=>setIsActive(false),90)
    }

    return(
        
        <>
        <button onClick={handleClick} style={buttonStyle}>Click Me</button>
        <hr />
        <h1 >{name}</h1>
         </>
    )   
}


const Event = () => {
  return (
 <>
    <Btn/>
 </>
  )
}



export default Event
