import { useState } from "react";

const Profile = () => {
const [profile, setProfile] = useState({
    name:"Samikshya",
    age:"23"
});
const [naam,setName]=useState(profile.name)

const handleChange=(e)=>{
    setName(e.target.value)
}

const submitHandler=()=>{
    setProfile((prev)=>{
        return {...prev,name:naam}
    })
}


  return (
    <div>
        <section>
            <h3>{profile.name}</h3>
            <h3>{profile.age}</h3>
        </section>  
      <label htmlFor="name">Update Name</label>
      <input type="text" id="name" name="name" value={naam} onChange={handleChange} />
      <input type="submit" name="submit" onClick={submitHandler} />
    </div>
  )
}

export default Profile
