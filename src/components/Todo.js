import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export default function Todo(props) {
    const[todos, setTodos] = useContext(TodoContext);

    const completeTodo = (e)=>{
        const filterTodos = todos.map((item) =>{
            if(item.id === e.target.value){
                item.completed = false;
                if(e.target.checked){
                    item.completed = true;
                }
            }
            return item;
        })
        setTodos(filterTodos);
    }

    const deleteTodo = (e)=>{
        e.preventDefault()
        const filterTodos = todos.filter((item) =>{
            return item.id !== e.target.id;
        })
        setTodos(filterTodos)
    }

  return (
    <>
      <div className='todo-item'>
        <input type='checkbox'  id={props.id} value={props.id} onChange={e => completeTodo(e)}></input>
        <label htmlFor={props.id}>{props.title}</label>
        <button type='button' id={props.id} onClick={e => deleteTodo(e)} className='btn-delete'>Delete</button>
      </div>
    </>
  )
}
