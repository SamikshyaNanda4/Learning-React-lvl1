const HelloUser=()=>{
    return (
        <h2>Welcome User</h2>
    )
}

const HelloAdmin=()=>{
    return (
        <h2>Welcome Admin</h2>
    )
}


const UserStatus = ({loggedIn,isAdmin}) => {
  if(loggedIn){
    return (
        <div>
          {
            loggedIn && isAdmin? <HelloAdmin/> : <HelloUser/>
          }
        </div>
      )
  }else{
    return <h2>Please login</h2>
  }
}

export default UserStatus
