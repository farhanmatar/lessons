import React ,{useState} from 'react';
import './App.css';


function App() {
  const [counter ,setCounter]= useState(5)
  const [food ,setFood ]= useState(['banana']);
  const [color ,setColor ]= useState(['lightgreen']);
  document.body.style.background=color;
    return (
    <div className="App">
    <p>
      you clicked {counter} times
    </p>
      <button onClick= {( )=> setCounter(counter +1)}>      
     click me 
     </button>
     <div>
       <button onClick = {()=> setColor('red')}> red</button>
       <button onClick = {()=> setColor('green')}> green</button>
       <button onClick = {()=> setColor('yellow')}> yellow</button>
       <button onClick = {()=> setColor('blue')}> blue</button>
     </div>
    </div>
  );
}

export default App;
 








/* import React, { Component } from 'react'
export default class App extends Component {
 constructor(props){
   super(props);
   this.state = {
     counter: 5
   }
 }
 render() {
   return (
     <div className="App">
       <p>You Click Here {this.state.counter}</p>
       <button onClick={()=> this.setState({counter : this.state.counter +1})}>Click</button>
     </div>
   )
 }
}
 */