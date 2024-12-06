import { useState,useEffect } from "react"



const useFetch = (url) => {
    const [Data,setData]=useState(null)

    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
    },[])

    return [Data]

}

export default useFetch
