import React, { Component } from 'react'
import Ctime from './Ctime'

export default class Clocks extends Component {
    constructor(props){
        super(props);
        this.state={
            countries:['Europe/Zurich','Europe/istanbul','Indian/Maldives'],
            time: new Date()
        }
    }
    componentDidMount(){
        this.time=setInterval(
            () => this.tick(),1000
        );
    }
    tick = ()=>{
        this.setState({time:new Date()})
    }
    render() {
      const cityTime=  this.state.countries.map((item)=>{
       return( <Ctime time={this.state.time}
        timezone={item}/> )
      }

      )
        return (
            <div>
          
           {cityTime}
            </div>
        )
    }
}
