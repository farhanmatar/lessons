import React,{ Component } from 'react';
import './App.css';
import C from './components/C'
import B from './components/B'

class App extends Component {
  render (){ 
  return (
    <div className="App">
      <h1>React Redux Demo</h1>
      <B/>
      <C/>
    
    </div>
  );
}
}
export default App;
