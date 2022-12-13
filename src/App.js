import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from '../src/Pages/HomeScreen/HomeScreen';
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import About from './About';
import LoginScreen from './Pages/LoginScreen/LoginScreen';
import { auth } from './firebase'
import { useDispatch, useSelector } from 'react-redux';
import { login,logout,selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser); //selectUser from redux store that give back the user object
  const dispatch = useDispatch();

  // NOTE:
  // Initially the user will be null, once the user is logged in , dispatch login will update redux

  //UseEffect to keep track of users that are logged in
  useEffect(() => {
    //Basically a listener that authenticates the state change
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //user is logged in 
        console.log(userAuth)
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      }else{
        //user is logged out
        dispatch(logout)    //Resets the user back to null from redux state management
      }
    }) 
    return unsubscribe;   //cleanup function
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
