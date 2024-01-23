import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoContext } from '../context/TodoContext';

export default function AddTodo() {
    const[title, setTitle] = useState('');
    const[todos, setTodos] = useContext(TodoContext);
    
    const addTodo = (e)=>{
        e.preventDefault();
        if(title === '' || title === undefined){
            alert('Please enter something')
            return
        }else{
            const newTodos = [ ...todos, { id: uuidv4(), title: title, completed: false }]
            setTodos(newTodos);
            setTitle(' ')
        }
    }
       
  return (
    <div>
      <div className="container">
      <h1>TO-DO List </h1>
      <form>
        <input className='addTodo' value={title} placeholder='Add TO-DO here...' onChange={e=> setTitle(e.target.value)}></input>
        <button className='form-btn' onClick={addTodo}>ADD TODO</button>
       
      </form>
    </div>
    </div>
  )
}

