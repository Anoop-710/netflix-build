import React, {useState,useEffect} from 'react'
import './Row.css'
import axios from '../../axios';

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {

    const [movies,setMovies] = useState([]);

    useEffect(()=>{
      async function fetchData(){
          const requests = await axios.get(props.fetchUrl)
          setMovies(requests.data.results)
          return requests
      }
       
      fetchData()
          },[])

    console.log(movies);
  return (
    <div className="row">
      <h2>{props.title}</h2>

      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            // onClick={() => handleClick(movie)}
            className={`row-poster ${props.isLargeRow && "row-posterLarge"}`}
            src={`${base_url}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />} */}
    </div>
  )
}

export default Row; 