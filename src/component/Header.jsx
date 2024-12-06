const Header = () => {



  return (
    <div>
        <h1>WELCOME TO THE WEBSITE</h1>
      <nav style={{justifyContent:"space-between",display:"inline-block"}}>
        <a href="" className="a" style={{ justifyContent: "space-between", display: "inline-block", padding: "10px 15px 10px 15px" ,textDecoration:"none"}}>Home</a>
      <a href="" className="a" style={{ justifyContent: "space-between", display: "inline-block", padding: "10px 15px 10px 15px" ,textDecoration:"none"}}> About</a>
      <a href="" className="a" style={{ justifyContent: "space-between", display: "inline-block", padding: "10px 15px 10px 15px", textDecoration:"none" }}>Contact</a></nav>
    </div>
  )
}

export default Header
