import React,{Component} from 'react';

import './App.css';
import Persons from './person/Person'

class App extends Component{
  state={
    persons:[
      {name:'Ali',job:'web Designer',age:'25'},
      {name:'Hamed',job: 'Android developer',age:'88'}
    ]
  }
  changeContent = ()=>{
    console.log("change content");
    document.querySelector('body').style.background='blue'
    this.setState({
      persons:[
      {name: 'John',job:'Dentist',age:55,class:'vip'},
      {name: 'Lara',job:'Human Resurces',age:30}
      ]

    })
  }
  render(){
    const myStyle = {
    
      border:'1px solid blue',
      paddinf:'10px'
    };
   return (
    <div className="App" >
    <Persons name="Mansour" job="DCI teacher" age="28"/>
    <Persons name="Nat" job="DCI student" age="33"/>
    <Persons name="Peter" job="DCI student" age="44"/>
    <Persons name="Suliman" job="DCI student" age="26"/>
     <div className="dark">
       <button style = {myStyle} onClick={this.changeContent}>change Content</button>
     </div>
       <Persons  name={this.state.persons[1].name} job={this.state.persons[1].job} age={this.state.persons[1].age}/>
       <Persons  name={this.state.persons[0].name} job={this.state.persons[0].job} age={this.state.persons[0].age}/>
    </div>
  ); 
  return React.createElement('div',null,React.createElement('h1',null,'This is react app'));
}
}
export default App;
