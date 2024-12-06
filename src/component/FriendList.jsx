import { useState } from "react"


const FriendList = () => {
const [friends,setFriends]=useState(["Samikshya","Shivam"])

const addOneFriend=()=>{
    setFriends([...friends,"Rahul"])
}

const removeFriend=()=>{
    setFriends(friends.filter(friend=>friend!=="Rahul"))
}

const updateFriend=()=>{
     setFriends(friends.map(f=>f==="Samikshya"?"Samikshya Nanda":f))
}
  return (
    <div>
      {friends.map(f=><p>{f}</p>)}
      <button onClick={addOneFriend}>NEW FRIEND</button>
      {/* <input type="text" name="friend" placeholder="friend's name"/> */}
      <button onClick={removeFriend}>REMOVE FRIEND</button>
      <button onClick={updateFriend}>UPDATE FRIEND</button>
    </div>
  )
}


export default FriendList
