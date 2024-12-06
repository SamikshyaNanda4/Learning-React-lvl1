import React from "react"

const ValidPassword=()=>{
   return  <h1>Password is Valid</h1>
}

const InvalidPassword=()=>{
    return  <h1>Password is Invalid</h1>
}



const Password = ({isValid}) => {
  // if (isValid) {
  //     return <ValidPassword/>
  // }else{
  //   return <InvalidPassword/>
  // }
  return (
    <div>
      {isValid? <ValidPassword/> : <InvalidPassword/> }
    </div>
  )
}

export default Password
