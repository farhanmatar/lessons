import React,{Component} from 'react';
import TableHeader from './Components/TableHeader'
import './App.css';

class App extends Component {

  state={
    List:[
      {id:1,name:"Ali",age:29, email:"Ali@dci.com"},
      {id:2,name:"Andreas",age:30, email:"Andreas@dci.com"},
      {id:3,name:"Ahmad",age:54, email:"Ahmad@dci.com"},
      {id:1,name:"John",age:33, email:"John@dci.com"},
    ]
  }
   render(){
     return(
        <div className="App">
        <table>
          <thead>
            <tr>
              <TableHeader list= {this.state.List}/>
            </tr>
            </thead>
          <tbody></tbody>
        </table>
      </div>
      );
    }
  }

export default App;
