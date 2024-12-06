import React from 'react'
import {Data} from './ComponentA'
import {Data1} from './ComponentA'
import { useContext } from 'react'

const ComponentABC = () => {
  
  const userName=useContext(Data)
  const userAge=useContext(Data1)

  return (
    <>
      {/* <Data.Consumer>
        {
          (v)=>{
            return <div>{v.name2}</div>
          }
        }
      </Data.Consumer> */}
    
      <p>My name is {userName.name3} and I am {userAge}  years old</p>
    </>
  )
}

export default ComponentABC
