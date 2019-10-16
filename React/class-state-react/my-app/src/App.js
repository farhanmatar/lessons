import React, { Component } from 'react'
import Person from './person';
import './App.css';
export default class App extends Component {
  state = {
    persons : [
      {name: "max", city: "Essen",job : "Doctor"},
      {name: "Anna", city: "Berlin",job : "Journalist"},
      {name: "Romal", city: "lipzig",job : "Dintest"}
    ],
    country : "Germany",
    currency: "Euro"
  }
  changeData = () => {
    // alert(this.state.persons[0].name)
    this.setState({
      persons : [
        {name: "John", city: "hamburg",job : "driver"},
        {name: "Anna", city: "london",job : "cook"},
        {name: "Ali", city: "paris",job : "doctor"}
      ],
      country : "Germany",
    })
    alert(this.state.country)
  }
  render() {
    return (
      <div className="App">
        <h1> this is react Class Component </h1>
        

        <Person name="Lars" city="Hannover" job="Web Desgner"  />

        <Person name={this.state.persons[0].name} 
        city={this.state.persons[0].city} job={this.state.persons[0].job}  />

          <Person name={this.state.persons[1].name} 
        city={this.state.persons[1].city} job={this.state.persons[1].job}  />
      
          <Person name={this.state.persons[2].name} 
        city={this.state.persons[2].city} job={this.state.persons[2].job}  >
         <button onClick={this.changeData}> change data </button>
       </Person>


      </div>
    )
  }
}

