

import React, { Component } from 'react'

export default class Navigation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             email:"",
             emailError:"",
             valid:false
        }
    }
    NameHandelInputChange = (e) =>{
        this.setState({
            name:e.target.value,
        })
    }
    EmailHandelInputChange = (e) =>{
        this.setState({
            email:e.target.value,
        })
    }
    handelSubmit = (e) =>{
       e.preventDefault();
       if(this.state.name===''|| this.state.email===''){
    alert('please fill the form');
    return false;
       }
        else{
            alert('thank you have a nice day');
            this.setState({
                valid:true
            })
            return true;
        }  
        
    }
    
    render() {
        if(this.state.valid){
        
        return (
            <div>
                <h1>thanks for your efford</h1>
            </div>
        )
        }
        else{
            return (
                <div class="wrap"> 
                    {this.state.emailError} <div style={{color:'red'}}> {this.state.emailError} </div> 
                   <h2>sign up here</h2>
                    <form className = 'formclass' onSubmit={this.handelSubmit} action="">
                        <input className="inputname" onChange={this.NameHandelInputChange} type="text" placeholder="name"   name="" id="" />
                        <br/>
                        <input className="inputname" onChange={this.EmailHandelInputChange} type="text" placeholder="email"   name="" id="" />
                        <br/>
                        <input className="submitname" type="submit" name="" id="" value="Submit" /> 
                    </form>
              
                 
                 </div>
            );
            
        }
    }
}















/* const Navigation = () => {
    return (
        <div class="wrap">
           <h2>sign up here</h2>
            <form action="">
                <input type="text" placeholder="First Name" required name="" id="" />
                <input type="text" placeholder="Last Name" required name="" id="" />
                <input type="text" placeholder="Email" required name="" id="" />
                <input type="text" placeholder="Username" required name="" id="" />
              <textarea name="" id="" cols="30" rows="10" placeholder="your Message"></textarea>
                <input type="submit" name="" id="" value="Submit" /> 
            </form>
        </div>
    );
}

export default Navigation; */