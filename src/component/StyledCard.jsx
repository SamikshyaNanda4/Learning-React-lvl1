import UseIcon from "./UseIcon"

const StyledCard = () => {
  return (
    <div style={{backgroundColor:"black",borderRadius:"10px",padding:"15px",color:"white",border:"2px solid black",boxSizing:"border-box",width:"200px",display:"flex",justifyContent:"center",alignItems:"center"}}>
      This is a React Card <UseIcon color="yellow"/>
    </div>
  )
}

export default StyledCard
