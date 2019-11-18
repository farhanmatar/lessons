import React, { Component } from 'react'
import './App.css'
import Images from './Images'
export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      word: 'farhan',
      guessed_letters:['a','b','c'],
       index: 0
    }
  }
  
 abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
           'p','q','r','s','t','u','v','w','x','y','z'];
 buttons = this.abc.map(item =>{
  return(
  <button className="btn" value={item}>
  {item}
  </button> 

  )
})

playword =()=>{

let  guessArray = this.state.word.split('').map((letter)=>{
  if (this.state.guessed_letters.includes(letter)){
      return letter
  }else{
      return'_'
  }
 
})
return guessArray
}


  render() {
    return (
      <div className="App">
      <h1>Hangman</h1>
      <div>
      <Images index={this.state.index}/>
      <p className="p">can you guess the programming language?</p>
      <p className='word'>{this.playword()}</p>
       </div>
        {this.buttons }
      </div>
    )
  }
}

