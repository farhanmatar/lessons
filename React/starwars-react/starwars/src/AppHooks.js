import React, { useEffect,useState} from 'react'
import './App.css';
export default function APPHooks() {
    const [personalInfo,setPersonInfo]=useState([]);
    useEffect(()=>{
        //the same code inside componentDidMounte
        let initialPersonInfo = [];
        fetch('https://swapi.co/api/people/')
        .then(res => res.json())
        .then(data =>{
          initialPersonInfo = data.results;
          console.log(initialPersonInfo)
          setPersonInfo(initialPersonInfo)
       
    })
        
      

    },[])
    let allData = personalInfo.map((info,index)=>{
        return(
          <div  className="card card-1" key={index} >
          <h3>Name :{ info.name}</h3>
          <h3>height :{ info.height}</h3>
          <h3>mass :{ info.mass}</h3>
          <h3>hair color :{ info.hair_color}</h3>
        
  
          
          </div>
        )
      })
    return (
        <div>
           <h1>star wars Hooks</h1> 
            {allData}
        </div>
    )
}
