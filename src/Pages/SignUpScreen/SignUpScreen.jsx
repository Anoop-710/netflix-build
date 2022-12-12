import React, {useRef} from 'react'
import './SignUpScreen.css'
import { auth } from '../../firebase'
const SignUpScreen = () => {

    
    // useRef references to an html element     
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    
    const register = (e) => {
        e.preventDefault(); //In order to prevent refreshing the page when form button is present

        //Upon the user clicking the register button, we need to capture the users input credentials and store it in the firebase
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser);
        }).catch(err => {
            alert(err.message);
        });
    }

    const signIn = (e) => {
        // const userValue = event.target.value;
        // console.log(userValue)
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser); 
        }).catch(err => {
            alert(err.message);
        })
    }
  return (
    <div className="signupScreen">
           <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email address" />
                <input ref={passwordRef} type="password" placeholder="Password" />
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