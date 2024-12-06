import { useState } from "react"


const Profile2 = () => {
    const[profile,setProfile]=useState({
        name:"",
        age:""
    })


    const handleChange=(e)=>{
        
        const{name,value}=e.target
        setProfile((prevValue)=>{
            return {...prevValue,[name]:value}
        })

    }

  return (
    <>
    <div>
        USER PROFILE:
    </div>
    
    
    <div>

        <label > Name: 
            <input type="text" name="name" value={profile.name} onChange={handleChange} />
        </label>

    </div>
    

    <div>
        <label >Age:
            <input type="number" name="age" value={profile.age} onChange={handleChange} />
        </label>
    </div>

    <div>
        <h3>Profile Informaion</h3>
        <p>{profile.name}</p>
        <p>{profile.age}</p>
    </div>
    </>
    
  )
}

export default Profile2
