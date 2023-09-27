import React, { useState,useEffect } from 'react'
import './App.css';
import {  LandingPage } from './pages';
import { useLocation } from "react-router-dom";
import { getCurrentLocation } from './utils/utils'

function App() {
  const location = useLocation()
  const [currentLocation, setCurrentLocation] = useState();

  useEffect(() => {
    setCurrentLocation(getCurrentLocation(location.pathname))
    }, [location.pathname])
  return (
    <div className="app">
      <LandingPage current={currentLocation}/>
    </div>
  );
}

export default App;
