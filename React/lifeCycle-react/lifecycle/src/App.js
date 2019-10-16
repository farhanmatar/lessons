import React, { Component } from 'react'
import './App.css';
import TitleHeader from './titleHeader';

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      data:[
        {id : 1 , title:'first item'},
        {id : 2 , title:'second item'},
        {id : 3 , title:'third item'}
      ]
    }
  }
  render() {
    const list = this.state.data.map((item)=>{
      return <li key={item.id}>{item.title}</li>
    })
    return (
      <div className="wrapper">
      <ul className="list">
      {list}
      </ul>
        
      </div>
    )
  }
}
