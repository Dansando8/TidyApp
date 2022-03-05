import React,{useEffect, useState} from 'react'
import TaskForm from './TaskForm'


function Tasks({tasks}) {

const[state, setState] = useState({})

useEffect(() => {
 
  

}, [])


  return (
    <div>
    <h1>TASKS </h1>
      <TaskForm></TaskForm>
    </div>
  )
}

export default Tasks