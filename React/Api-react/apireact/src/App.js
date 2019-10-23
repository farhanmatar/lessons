import React, { Component } from 'react'
import Inputfield from './Inputfield'
export default class App extends Component {
 constructor(props) {
   super(props)
   this.state = {
      root:'https://pixabay.com/api/',
      key:'13971360-7ebc3f6198251de222a6debbe',
      query:'',
      url:'',
      letSearch:false,
      loadImages:null,
   }
 }
 saveQuery=(e)=>{
   this.setState({
     query:e.target.value,letSearch:false
   })
 }
 searchImages= ()=>{
   let words = this.state.query.split(' ');
   let newUrl = this.state.root+'?key='+this.state.key+'&q=';
   
   words.forEach((word)=>{
     newUrl += word+'+'
     console.log(newUrl)
   })
 }
 render() {
   return (
     <div>
       <Inputfield change={this.saveQuery} click={this.searchImages}  />
     </div>
   )
 }
}