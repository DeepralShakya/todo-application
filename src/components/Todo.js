import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export default function Todo(props) {
    const{todos, setTodos} = useContext(TodoContext);

    const deleteTodo = (e)=>{
        e.preventDefault()
        const filterTodos = todos.filter((item) =>{
            return item.id !== e.target.id;
        })
        setTodos(filterTodos);
    }

  return (
    <>
      <div className='todo-item'>
        <label>{props.title}</label>
        <button type='button' id={props.id} onClick={e => deleteTodo(e)} className='btn-delete'>Delete</button>
      </div>
    </>
  )
}
