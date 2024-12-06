

const Greeting = () => {
const msg="Greetings from warOwl!";
const date=new Date()
const currentDate=date.toLocaleDateString();

  return (
    <div>
        <h1>{msg}</h1>
        <p>{currentDate}</p>
    </div>
  )
}

export default Greeting
