import React,{useState} from 'react'

export default function Input() {
    const [value ,setValue]= useState('')
    return (
        <div>
            <form onSubmit={(e)=>{e.preventDefault(); }}>
            <label>plese inter your name </label>
                <input onChange = {(e)=> setValue(e.target.value)} type="text"/> 
                <p>{value}</p>
            </form>
        </div>
    )
}
