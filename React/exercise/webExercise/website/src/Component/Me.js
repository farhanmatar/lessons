import React  from 'react';
import {Link} from 'react-router-dom';
import img from './img/color.jpg'
const Me = () => {
    return (
     
    <div>
        
    <div className="first">
            <img className="me" src={img} alt=""/>
        </div>

    <div className="second">
        <h1>My Name</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <h2>Some websites I frequently use :</h2>
                
                <Link to="www.google.com" >
                Google
                </Link>
                <br/>
                <Link to="www.youtube.com">
                Youtube
                </Link>
                <br/>
                <Link to="www.facebook.com" >
                Facebook
                </Link>
        </div>

        </div>
    );
}

export default Me;