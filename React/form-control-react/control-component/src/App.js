import React from 'react';
import './App.css';
import Input from './Input'

const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(e.target.todo.value);
}


function App() {
 return (
   <div className="App">
     <h2>Control Components in React</h2>
     <form onSubmit ={handleSubmit}>
      
       <Input />
       <button>Submit</button>
     </form>
   </div>
 );
}
export default App;
