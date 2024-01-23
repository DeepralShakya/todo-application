import React, { useContext } from 'react'
import Todo from './Todo'
import { TodoContext } from '../context/TodoContext'

export default function TodoList() {
    const[todos, setTodos] = useContext(TodoContext)
   
  return (
        todos.length >= 1? todos.map((item)=>{
            return(
            <Todo key={item.id} id={item.id} title={item.title} completed = {item.completed}/>
            )
        }) : <p>No todo found</p>
      
  
  )
}
