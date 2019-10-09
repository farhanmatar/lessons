import React  from 'react';
import logo from './logo.svg';
import './App.css';

function App(info) {
  return (
    <div className="App">
   
    <h1> this is my first React App</h1>
    <p>{info.name}</p>
    <h2>{info.city}</h2>
    <h2>{info.age}</h2>

    </div>
  );
}
// class Person extends Component{

// }

function Person(info1) {
  return (
    <div className="person">
   
    <h1> this is my second line in the  App</h1>
    <p>{info1.name}</p>
    <h2>{info1.job}</h2>
    <h2>{info1.age}</h2>
    <h3>{info1.city}</h3>
    </div>
  );
}

export  {Person};
export default App;
    
