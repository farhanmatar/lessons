import React, { Component } from 'react'
import './App.css';
import NoteNavbar from './Component/NoteNavbar';
import Notelist from './Component/Notelist';
export default class App extends Component {

  state = {
    notesList :[
      {id:0,name:"note 1",text:"the content of the First note"},
      {id:1,name:"note 2",text:"the content of the second note"},
    ],
    nameValue:'',
    textValue:'',
    noteActive:0
  } 

  saveName=(e) => {
   this.setState({nameValue:e.target.value})
   console.log(this.state)
  }
  createNote = () =>{
    let newNote = {...this.state};
    let newNoteName = this.state.nameValue;
    let length = this.state.notesList.length;
    let newId = this.state.notesList[length-1].id + 1;
    newNoteName.notesList.push({id:newId, name:newNoteName,text:'text in new note'});
    newNote.nameValue = '';
    this.setState(newNote)
  }
  render() {
    return (
      <div>
        <NoteNavbar value={this.state.nameValue} save={this.saveName}
        create={this.createNote}/>
        <Notelist list = {this.state.notesList}/>
      </div>
    )
  }
}
