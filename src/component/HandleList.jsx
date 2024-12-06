

const HandleList = () => {
    const numbers=[1,2,3,4,5];
    const userInfo=[
        {
            "id":1,
            "name":"John",
            "age":30
        },
        {
            "id":2,
            "name":"Alex",
            "age":40
        },
        {
            "id":3,
            "name":"Kylie",
            "age":25
        }
    ]

  return (
    <>
    <div>
        {numbers.map((num,index)=> (<span key={index}>{`${num}, `}</span>))}
    </div>
    <section>
    
            {userInfo.map(({id,name,age},index)=> <ul key={index}>
                <li> id: {id}</li>
                <li> name: {name}</li>
                <li>age: {age}</li>
            </ul>)}
    
    </section>
    
    </>
    
  )
}

export default HandleList
