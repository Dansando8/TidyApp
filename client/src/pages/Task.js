import React, { useState, useEffect } from 'react'
import apiService from '../apiService'
import { useParams } from 'react-router-dom'
import { Card, Button, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Task() {

  const [task, setTask]= useState({})

  const { id } = useParams()


  useEffect(() => {
    apiService.findTaskById(id)
    .then(taskFound => setTask(taskFound)); 
  }, [id]); 

  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await apiService.findAndDeleteTaskByID(id); 
    } catch (error) {
      console.log(error)
    }
    navigate('/dashboard')
  }
  
  return (
    <div>
    <div>Are you sure that you want to delete this task ?</div>
    <div className='task-item-container'>
    <Card style={{ width: '18rem', margin: '20px'}}>
        <ListGroup variant="flush">
          <ListGroup.Item><h1>{task.taskName}</h1></ListGroup.Item>
          <ListGroup.Item><h1>Points: {task.taskPoints}</h1></ListGroup.Item> 
        </ListGroup>
          <Button style={{borderRadius:'2px', border:'none', backgroundColor:'grey'}} onClick={handleDelete}>DELETE</Button>
      </Card>

    </div>
    </div>
  )
}

export default Task