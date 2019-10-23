import React from 'react';
const Inputfield = (props) => {
   return (
       <div>
           <input type="text" onChange={props.change}></input>
           <button onClick={props.click}> Search  </button >
       </div>
   );
}
export default Inputfield;
