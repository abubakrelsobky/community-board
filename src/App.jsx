import React from 'react';
import './App.css';
import Cards from "./Components/Cards";
import TruckTheme from './assets/images/truck-theme.jpg';


const App = () => {
  return (
    <div className="App">
      <img src={TruckTheme} alt="Theme Image" className="theme-image" />
      <h1 style={{ color: '#5072A7' }}>New York's Best Food Trucks</h1>
      <Cards />
    </div>
  )
}

export default App;