import React, { Component } from 'react'
import './App.css';
import Header from './component/Header'
import SearchResult from './component/SearchResults'
import About from './component/About'
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       searchTerm:'',
       lastSearchTerm:'',
       currentPage:'Search'
    }
  }
  navigate=(page)=>{
   this.setState({
     currentPage:page
   })
  }

  search=(e)=>{
   this.setState({
     searchTerm:e.target.value
   })
  }
  click=()=>{
    this.setState({
      lastSearchTerm:this.state.searchTerm
    })
    console.log(this.state.lastSearchTerm);
  }
  render() {
    
    let outPut = null;
    if(this.state.currentPage==='Search'){
      outPut= <SearchResult searchFor={this.state.lastSearchTerm}/>
    }else{
      outPut= <About/>
      
    }
    return (
      <div>
       <Header navigationHandler={this.navigate} />
        <div className="App">
          <input onChange={this.search} id="tableSearch"></input>
          <button onClick={this.click} >Search</button>
        </div>
        <div>
         {outPut}
        </div>


      </div>
    )
  }
}

