import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import apiService from '../apiService';


function TaskForm({updateTasks}) {

  const initialState = {
    taskName: '', 
    taskPoints:'', 
  }
  
  const[state, setState] = useState(initialState); 


  const handleChange = (e) => {
    const{name, value} = e.target; 
    setState((prevState) => ({
      ...prevState, 
      [name]:value, 
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const userId = localStorage.getItem('userId')

    const newTask = {
      taskName: state.taskName, 
      taskPoints: state.taskPoints,
      userId: userId,  
    }
    
    const savedTask = await apiService.postTask(newTask)
    console.log(savedTask, 'SAVED TASK')
      updateTasks(savedTask)
      setState(initialState); 
  }
  

  return (
    <div>
    <h1>TASKS</h1>
    <Form> 
      <Form.Group className='d-flex'style={{margin:'10px'}}>
        <Form.Control name="taskName" placeholder="Task name" type='text' maxLength="35" value={state.taskName} style={{marginLeft:'10px'}} onChange={handleChange} /> 
        <Form.Control  name="taskPoints" placeholder="Task points" type='number' value={state.taskPoints} style={{marginLeft:'10px'}} onChange={handleChange} /> 
        <Button variant="primary" type="submit" style={{borderRadius:'2px', border:'none', backgroundColor:'grey', marginLeft:'10px' }} onClick={handleSubmit}>NEW TASK</Button>
      </Form.Group>
    </Form>
    </div>
  )
}

export default TaskForm