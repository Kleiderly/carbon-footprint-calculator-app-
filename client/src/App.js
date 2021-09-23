import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Trial from './components/Trial';

function App() {
  
  useEffect(()=>{
       axios.get(`/api`)
          .then((response) => console.log(response.data))
          .catch((error)=>{
           console.log(error)
         })
     }, [])

  return (
    <div className="App">
      <h1>Hello my friend!</h1>
      <h1>I'm Kleiderly Calculator</h1>
      <h1>I help you to choose right things</h1>
      <Trial/>
    </div>
  );
}

export default App;
