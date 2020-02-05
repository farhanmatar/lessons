 import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data: []
    }
  }
  componentDidMount(){

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json))

    fetch('http://localhost:3001/api')
    .then(res => {
      return res.json();
    })
    .then(data =>{
      console.log(data);
      this.setState({
        data:data
      })
    })

  }
  
  render() {
    console.log(this.state.data,"the data from state");
    //let message = this.state.data.msg;

    return (
      <div>
        <h1>the fetch data is here </h1>
        {/* <h2> {message}</h2> */}
        
      </div>
    )
  }
} 
