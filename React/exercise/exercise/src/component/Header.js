import React from 'react'

export default function Header(props) {
    return (
        <div className="header">
           <h1>this is the header</h1>   
             <hr/>
           <div> 
              <span onClick={()=>props.navigationHandler('Search')}>Search</span> 
              <span onClick={()=>props.navigationHandler('About')}>About</span> 
            </div>
         </div>
    )    
        
}

