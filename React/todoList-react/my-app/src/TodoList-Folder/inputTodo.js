import React from 'react';


const InputTodo=(props)=>{
    return(
        <div>
        <input  type="text" placeholder="Enter new task to do ..."
        value={props.todoValue} 
   
        onChange={(e) => props.changed(e)}
        />
        <span className="errorMessage">{props.errorMessage}</span>
       </div>
    )
}

export default InputTodo;