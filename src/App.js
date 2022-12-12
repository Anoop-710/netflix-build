import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from '../src/Pages/HomeScreen/HomeScreen';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import About from './About';
import LoginScreen from './Pages/LoginScreen/LoginScreen';
import { auth } from './firebase'
function App() {

  const user = null;
  //UseEffect to keep track of users that are logged in
  useEffect(() => {
    //Basically a listener that authenticates the state change
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //user is logged in
      }else{
        //user is logged out
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
