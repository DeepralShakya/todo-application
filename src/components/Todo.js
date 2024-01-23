import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'

export default function Todo(props) {
    const[todos, setTodos] = useContext(TodoContext);
  return (
    <>
      <p className='todo-item'>
        <input type='checkbox'  id={props.id} value={props.id}></input>
        <label htmlFor={props.id}>{props.title}</label>
        <button type='button' className='btn-delete'>Delete</button>
      </p>
    </>
  )
}
