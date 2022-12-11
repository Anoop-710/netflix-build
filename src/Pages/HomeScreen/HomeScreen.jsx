import React from 'react'
import './HomeScreen.css'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <Navbar />
      <Banner />
    </div>
  )
}

export default HomeScreen