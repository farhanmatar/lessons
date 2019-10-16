import React from 'react';

const ListTodo=(props) => {
   let listOfItems;
   if(props.list.length > 0){
       listOfItems= props.list.map((item)=>{
           return <h1>{item}</h1>
       })
   }
   else{
       listOfItems=<p>PLease add a task</p>
   }
   return(
       <div>
           <h1>
               {listOfItems}
           </h1>
       </div>
   )
}
export default ListTodo;
