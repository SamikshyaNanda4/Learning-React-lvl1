

const Func = () => {

    const myName="Samikshya Nanda";
    const multiply=(a,b)=>a*b;
    const sepacialClass="simple-class"


  return (
    <section>
       <p>2+2={2+2}</p>
       <h3>{myName}</h3> 
       <p>My FriendList: {["Alex","John","Waheen","Jordan"]}</p>
       <p>2*10={multiply(2,10)}</p>
       <p className={sepacialClass}>This is a special-Class</p>
    </section>
  )
}

export default Func
