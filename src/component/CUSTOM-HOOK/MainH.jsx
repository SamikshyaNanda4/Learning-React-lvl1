import useFetch from "./useFetch"


const MainH = () => {
    // const [data,setData]=useState(null)

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    //     },[])
    
   const [Data]= useFetch("https://jsonplaceholder.typicode.com/posts")


  return (
    <div>
      {
        Data && Data.map((item)=>{
            return <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
                </div>
        }
                        )

        }  
 </div>
  )

}

export default MainH
