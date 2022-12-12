import React from 'react'
import './SignUpScreen.css'

const SignUpScreen = () => {

    const register = (e) => {
        e.preventDefault(); //In order to prevent refreshing the page when form button is present
    }

    const signIn = (e) => {
        e.preventDefault();
    }
  return (
    <div className="signupScreen">
           <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email address" />
                <input type="password" placeholder="Password" />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className='signupScreen-grey'> 
                        New to Netflix? 
                    </span>
                    
                    <span className='signupScreen-link' onClick={register}>
                    Sign Up Now
                    </span>
                    </h4>
           </form>

        </div>
  )
}

export default SignUpScreen