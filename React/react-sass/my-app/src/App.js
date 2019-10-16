import React from 'react';
import './app.scss'
import whale from './whale.jpg'
import natur from './natur.jpeg'
import birds from './birds.jpeg'
import images from './images.jpeg'
/* import './App.css'; */

function App() {
  return (
    <div className="App">
     <h1>React with Sass</h1>
     <img src={whale}></img>
     <img src={natur}></img>
     <img src={birds}></img>
     <img src={images}></img>
    </div>
  );
}

export default App;
