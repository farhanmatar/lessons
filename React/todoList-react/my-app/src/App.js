import React,{Component} from 'react';
import './App.css';
import InputTodo from './TodoList-Folder/inputTodo';
import ListTodo from './TodoList-Folder/listTodo'



//this is an array
let TodoItems=[];

// we pushed some items to the array
TodoItems.push({id : 1, task:"Learn React", done:false});
TodoItems.push({id : 2, task:"Dinner with Friends", done:false});
TodoItems.push({id : 3, task:"Go to gym", done:false});

class TodoList extends Component{

  state={
    todoValue:"",
    todoList:[]
  }

  //its a function  to let us change on typing inside the input,then we callit from inside the input on inputTodo.js 
  changeToDoValue(e){
    this.setState({
      todoValue:e.target.value
    })
  }

  addToList(){
    let list =this.state.todoList;

    list.push(this.state.todoValue);
    // is to push the written value  from the input insdie the empty array todoList []
    this.setState({todoList: list,todoValue:""});
    console.log(this.state.todoList)
  }
  isValid = ()=>{
    if (this.state.todoValue === ''){
        return false;
   }
    return true;
        }

  render(){
   return (
     <div className="App">
       {
         TodoItems.map( (item) =>{
         return <h1> {item.task} </h1>
            }   
         ) 
       }
       <InputTodo todoValue={this.state.todoValue}
       changed={(e)=>this.changeToDoValue(e)}
       errorMessage={this.isValid() ? '': 'this fiels is required'} //Added
       />
       <button  disabled={!this.isValid()} onClick={()=> this.addToList()}>Add list</button>
       <ListTodo list={this.state.todoList} />
     </div>
   );
  }
}

export default TodoList;