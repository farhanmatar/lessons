import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter : 0, 
            message:"Click Me"
        }

    }
    btnClick = ( )=>{
        const counter=this.state.counter + 10;
        this.setState({
            counter : counter
            
        })

    }
    render() {
        return (
            <div className="App">
              <h5> {this.state.counter}</h5>
              <button className="btn btn-danger" onClick={this.btnClick}>
                  {this.state.message}
              </button>
                
            </div>
        )
    }
}
