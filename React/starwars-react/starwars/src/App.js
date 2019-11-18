import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       personalInfo:[]
    }
  }
  componentDidMount(){
    
    let initialPersonInfo = [];
    fetch('https://swapi.co/api/people/')
    .then(res => res.json())
    .then(data =>{
      initialPersonInfo = data.results;
      console.log(initialPersonInfo)
      this.setState({
      personalInfo:initialPersonInfo
    })
    }) 
    
    
  }
  render() {
    console.log(this.state.personalInfo)
    let allData = this.state.personalInfo.map((info,index)=>{
      return(
        <div  className="card card-1" key={index} >
        <h3>Name :{ info.name}</h3>
        <h3>height :{ info.height}</h3>
        <h3>mass :{ info.mass}</h3>
        <h3>hair color :{ info.hair_color}</h3>
      

        
        </div>
      )
    })

    return (
      <div>
        <h1>the info:</h1>
        {allData}
      </div>
    )
  }
}

