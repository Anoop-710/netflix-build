import React from 'react'
import './Navbar.css'

const Navbar = () => {

  // To keep the navbar fixed until it reaches the bottom of the page
  const [show, handleShow] = React.useState(false);

  const transitionNavbar = () => {
    if(window.scrollY > 100){
      handleShow(true)
    }
    else{
      handleShow(false)
    }
  }


  React.useEffect(()=>{
    //Every time the user scrolls this code snippet will listen to the scroll event and trigger transitionNavbar
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar); //Clean up the transitionNavbar
  }, [])
  return (
    // Show nav-black class only when show state is true
    <div className={`nav ${show && 'nav-black'}`}>  
      <div className="nav-contents">
        <img className='nav-logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

        <img className='nav-avatar' src="https://i.pinimg.com/736x/c4/88/34/c488340ad56e5454f4576f6c708b63aa.jpg" alt="" />
      </div>
      
    </div>
  )
}

export default Navbar