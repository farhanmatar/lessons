import React,{useState,useEffect} from 'react';
// useState is allow to mange State from function componenet
// useEffect is similar componentDidMount and componentDidUpdate in React LifeCycle
import './App.css';

function App() {
  const [counter , setCounter ]= useState(0);
  useEffect(()=> {
    document.title=`you clicked ${counter} times` ;
  })
  return (
    <div className="App">
    <p> you clicked {counter } times</p>
    <button onClick={ () => setCounter(counter +2)}> click me</button>
      
    </div>
  );
}

export default App;
