import React, { Component } from 'react'
import Input from './Input';
export default class AppClass extends Component {
    constructor(props){
        super(props);
        this.state={
            todo:""
        }
    }
    handelInputChange = (e) =>{
        this.setState({
            todo: e.target.value,
        })
    }
    handelSubmit = (e) =>{
        e.preventDefault();
        alert(`the task is : ${this.state.todo} `);
    }
    isValid = ()=>{
        if (this.state.todo === ''){
            return false;
       }
        return true;
            }

    render() {
        return (
            <div className="App">
                <h1>heeeeeehooooo</h1>
                <form onSubmit={this.handelSubmit}>
                    <Input onChange={this.handelInputChange} id="todo"
                    errorMessage={this.isValid() ? '': 'this fiels is required'}
                    placeholder="write a text" type="text" value = {this.state.todo}/>

                    {/* <Input type="submit" value="Submit the form" /> */}
                    <button className="btn btn-info" disabled={!this.isValid()} type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
