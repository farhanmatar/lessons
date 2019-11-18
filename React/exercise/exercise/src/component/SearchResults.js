import React, { Component } from 'react'
import User from './User'
export default class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[
                {id:1,name:' Natalie',email:'natali@gmail.com'},
                {id:2,name:' Peter',email:'peter@gmail.com'},
                    {id:3,name:' Wisam',email:'wisam@gmail.com'},
                    {id:4,name:' Ahmad',email:'ahmad@gmail.com'},
                    {id:5,name:' Dan',email:'danman@gmail.com'}

           ], 
             lastSearchTerm:''
        }
        
    }
    componentWillUnmount(){
        console.log("The SearchResults-component will unmount")
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => this.setState({ data }));
        console.log("The SearchResult-component has mounted.")
    }
    shouldComponentUpdate(nextProps){ 
        if(this.state.lastSearchTerm !==nextProps.searchFor){
         return true;
        }else {
            return false;
        }
      }

      componentDidUpdate(){
          this.setState({
              lastSearchTerm:this.props.searchFor
          })
      }
    
    render () {
console.log('Is render')  
  let result = this.state.users.filter((item)=>{
      return item.name.toLowerCase().includes(this.props.searchFor.toLowerCase())        
      })

     
    

      let tableBody = result.map((users) =>{
            return(
                <User id={users.id} name={users.name} email={users.email}/>
            )
        }

        )
        return(
        <div>
            <table  className="table">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
       
        
        {tableBody}
          </table>
        </div>
 )  
}
}
