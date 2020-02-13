import React, { Component } from 'react'
import apis from '../../api'


export default class NewMovie extends Component {
    constructor(props){
        super(props)
        this.state={
            title:'',
            rating:0,
            comment:''
        }
    }
    
    handleInputTitle =(e) =>{
        const value = e.target.value;
        this.setState({title:value})
    }

    handleInputComment =(e) =>{
        const value = e.target.value;
        this.setState({comment:value})
    }

    handleInputRating =(e) =>{
        const value = e.target.validity.valid
        ? e.target.value
        : this.state.rating
        this.setState({rating:value})
    }
    handelSendData = async () =>{
        const data = this.state;

        await apis.sendMovie(data).then(response =>{
        window.alert("Hey Dude! We added your review !!!")
        this.setState({
            title:'',
            rating:0,
            comment:''

        })
        })
    }
   
    render() {
        return (
            <div className="container from-group">
            <h1>Add new review </h1>
            <lable htmlfor="title">Title</lable>
            <input  name="title"
                    type = "text"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.handleInputTitle}
                        
            />
             <lable htmlfor="rating">Rating</lable>
             <input  name="rating"
                    type = "number"
                    min="0"
                    max="10"
                    className="form-control"
                    value={this.state.rating}
                    onChange={this.handleInputRating}
                        
            />  
             <lable htmlfor="comment">Comment</lable>
             <input  name="comment"
                    type = "text"
                    className="form-control"
                    value={this.state.comment}
                    onChange={this.handleInputComment}
                        
            /> 
            <button className="btn btn-primary"
            onClick={this.handelSendData}>Add Review 
            </button>
            </div>
        )
    }
}
