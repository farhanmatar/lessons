import React from 'react';


const Persons = (props)=>{

    return(
        <div className="person">
            <h1 className={props.class}>{props.name}</h1>
            <p> age{props.age}</p>
            <p>Job {props.job}</p>
        </div>
    )
}
export default Persons;