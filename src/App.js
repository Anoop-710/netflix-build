import React from 'react';
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

function App() {

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
