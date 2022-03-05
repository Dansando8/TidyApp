import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {FaTrashRestoreAlt} from 'react-icons/fa'


function Tasks({tasks}) {


  return (
    <div>
    <h1>TASKS</h1>

    <div className='tasks-container'>
    {tasks.map((task) => {
      return(
        <div key={task._id}className='individual-class-container'>
        <Card style={{ width: '18rem', margin: '20px'}}>
        <ListGroup variant="flush">
          <ListGroup.Item><h1>{task.taskName}</h1></ListGroup.Item>
          <ListGroup.Item><h1>Points: {task.taskPoints}</h1></ListGroup.Item>
          <LinkContainer to={`/tasks/${task._id}`}  style={{borderRadius:'2px', border:'none', backgroundColor:'grey', margin:'10px 10px' }}>
                <ListGroup.Item ><FaTrashRestoreAlt/></ListGroup.Item>
          </LinkContainer>
         
        </ListGroup>
          <Button style={{borderRadius:'2px', border:'none', backgroundColor:'grey'}}>Apply points</Button>
      </Card>
      </div>
      )
    })}
    </div>

      
    </div>
  )
}

export default Tasks