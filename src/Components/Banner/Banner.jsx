import React from 'react'
import './Banner.css'

const Banner = () => {

    // function to restrict the description

    function truncate(string,n){
        return string?.length > 150 ? string.substr(0,n-1) + '...' : string;
    }

  return (
    <header className='banner' style={{
        background: `url('https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0ZmxpeHxlbnwwfHwwfHw%3D&w=1000&q=80)`,
        // backgroundSize: 'cover',
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