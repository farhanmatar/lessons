import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/navbar/navbar'
import {BrowserRouter,} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
  <Navbar/>
    </div>
    </BrowserRouter>
  );
}

export default App;
