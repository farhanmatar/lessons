import React from 'react';
import './App.css';
export default function Input(props) {
  return (

    <div>
      <input onChange={props.onChange} id={props.id} type= {props.type}
       placeholder={props.placeholder} value={props.value}/>
       <span className="errorMessage">{props.errorMessage}</span>
    </div>
  )
}
