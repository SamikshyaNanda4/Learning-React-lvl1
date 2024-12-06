

const UserList = () => {
    const users=[
        {id:1,name:'John',age:25},
        {id:2,name:'Jane',age:30},
        {id:3,name:'Bob',age:35}
    ]
  return (
    <div>
        {users.map(({name,age,id,kafka})=><p key={id}> {name} is {age} years old </p>)}    
    </div>
  )
}

export default UserList
