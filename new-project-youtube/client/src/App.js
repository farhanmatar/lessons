import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
      this.state={
        apiResponse:""
      };
  }
  //callAPI(){
  //  
  //}
  componentWillMount(){
    fetch("http://localhost:9000/testAPI")
    .then(res => res.json())
    .then(res => res.this.setState({apiResponse: res}));
  }

render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        
      </header> 
      <p>{this.state.apiResponse}</p>
        
    </div>
  );
}
}
export default App;
