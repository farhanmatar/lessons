import React, { Component } from 'react'

export default class TitleHeader extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:''
        }
    }
    
    render() {
        return (
            <div className="App">
            <h1>{this.state.title}</h1>
                
            </div>
        )
    }
}
