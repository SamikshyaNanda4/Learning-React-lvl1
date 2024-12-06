import { DiCode } from "react-icons/di";

const ProfileCard = () => {
    const styles={
        backgroundColor:"lightgray",
        padding:"20px",
        border:"1px solid black",
        borderRadius:"8px",
        textColor:"black"

    }

  return (
    <div style={styles}>
      <DiCode size={40}/>This is my Profile
    </div>
  )
}

export default ProfileCard
