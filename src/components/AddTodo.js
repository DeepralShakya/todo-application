import React, { useState } from 'react'

export default function AddTodo() {
    const[title, setTitle] = useState('');

    
       
  return (
    <div>
      <div className="container">
      <h1>TO-DO List </h1>
      <form>
        <input className='addTodo' value={title} placeholder='Add TO-DO here...' onChange={e=> setTitle(e.target.value)}></input>
        <button className='form-btn'>ADD TODO</button>
      
      </form>
    </div>
    </div>
  )
}

