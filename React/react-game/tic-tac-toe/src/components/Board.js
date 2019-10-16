import React, { Component } from 'react'
import Square from './Square'

export default class Board extends Component {
    renderSquare(){
        return <Square value={this.props.squares[i]} onClick ={()=>this.props.onClick(i)} />
    }
    render() {
        return ( 
            <div>
                <div className="border-row">
                {this.render-Square(0)} 
                {this.render-Square(1)}
                {this.render-Square(2)}                     
                </div>
                    <div className="border-row">
                    {this.render-Square(3)} 
                    {this.render-Square(4)}
                    {this.render-Square(5)}                     
                </div>
                    <div className="border-row">
                    {this.render-Square(6)} 
                    {this.render-Square(7)}
                    {this.render-Square(8)}                     
                </div>
            </div>
        
        )
    }
}
