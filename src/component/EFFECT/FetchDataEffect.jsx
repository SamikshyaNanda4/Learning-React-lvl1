import { useState,useEffect } from "react"


const FetchDataEffect = () => {
    const[posts,setPosts]=useState([])
    const[loading,setLoading]=useState(false)

useEffect(()=>{
    const fetchPosts=async()=>{
        const response=await fetch('https://jsonplaceholder.typicode.com/posts')

        const data= await response.json()
        setPosts(data)
    }
    fetchPosts();
},[])

  return (
    <div>
        <h1>First Post Title:</h1>
        {posts.length>0?<h3>{posts[0].title}</h3>:<h3>Loading...</h3>}
    </div>
  )
}

export default FetchDataEffect
