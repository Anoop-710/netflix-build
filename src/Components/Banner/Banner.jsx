import React from 'react'
import './Banner.css'
import axios from '../../axios';
import requests from '../../Requests';

const Banner = () => {

    const [movie,setMovie] = React.useState([]);

    React.useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
            return request;
        }
        fetchData();
    },[]);

    console.log(movie)

    // function to restrict the description
    function truncate(string,n){
        return string?.length > 150 ? string.substr(0,n-1) + '...' : string;
    }

  return (
    <header className='banner' style={{
        // backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
    }}>
        <div className="banner-contents">
            <h1 className="banner-title">
                Movie name
            </h1>
            <button className="banner-buttons">
                <button className='banner-button'>Play</button>
                <button className='banner-button'>Add to playlist</button>
            </button>
            <h1 className="banner-description">

                {truncate('Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto ex, possimus, illo quo sunt, atque aliquam amet minus eos reiciendis! Dolore sint tempora sed atque quis aliquid soluta voluptatum?' , 150)}
            </h1>
        </div>

        <div className='banner-fadeBottom'/>
    </header>
  )
}

export default Banner