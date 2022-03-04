import React, { useState } from 'react'
import { Form, Button, Label, Glyphicon } from 'react-bootstrap'
import apiService from '../apiService';


function TaskForm() {

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

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const newTask = {
      taskName: state.taskName, 
      taskPoints: state.taskPoints, 
    }
    

  }
  

  return (
    <div>
    <Form> 
      <Form.Group className='d-flex'style={{margin:'10px'}}>
        <Form.Label>Task</Form.Label>
        <Form.Control name="taskName" type='text' maxLength="35" value={state.taskName} style={{marginLeft:'10px'}} onChange={handleChange} /> 
        <Button variant="primary" type="submit" style={{borderRadius:'2px', border:'none', backgroundColor:'grey', marginLeft:'10px'}} onClick={handleSubmit} >UPDATE</Button>
      </Form.Group>

      <Form.Group className='d-flex' style={{margin:'10px'}}>
      <Form.Label>Points</Form.Label>
        <Form.Control  name="taskPoints" type='number' value={state.taskPoints} style={{marginLeft:'10px'}} onChange={handleChange} /> 
        <Button variant="primary" type="submit" style={{borderRadius:'2px', border:'none', backgroundColor:'grey', marginLeft:'10px' }} onClick={handleSubmit}>UPDATE</Button>
      </Form.Group>
    </Form>
    <div> <h1><Glyphicon glyph="star" /></h1></div>
    </div>
  )
}

export default TaskForm