import { useState } from "react"


const Movie = () => {
    const[movie,setMovie]=useState({
        title:"Batman Begins",
        rating:45
    })

    const[movies,setMovies]=useState([{
        title:"Interstellar",
        rating:45
    },
    {
        title:"The Shawshank Redemption",
        rating:90
    },
    {
        title:"The Dark Knight",
        rating:98
    }

])

const [isUpdate,setIsUpdate]=useState(false)

    const handleClick=()=>{
        setMovie({...movie,rating:movie.rating+1})
    }

    const handleThis=()=>{
        setMovies(movies.map(m=>m.title==="The Dark Knight" && isUpdate===false?{...m,title:"John Wick 4"}:m))
        setIsUpdate((input)=>!input)
    }



  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{(movie.rating)/10.00}</p>
      <button onClick={handleClick} >Change Rating</button>

    <hr />
    <hr />
    <h2>Movies</h2>
    <ul>
        {movies.map((movie,index)=><li key={index}>{movie.title}</li>)}
    </ul>

    <section>
        <button onClick={handleThis}>{isUpdate?"MOVIE UPDATED":"UPDATE MOVIE"}</button>
    </section>

    </div>
  )
}

export default Movie
