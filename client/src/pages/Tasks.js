import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {FaQrcode, FaTrashRestoreAlt, FaCheckCircle} from 'react-icons/fa'


function Tasks({tasks, findRemainingPoints}) {


  return (
    <div>
    <div className='tasks-container'>
    {tasks.map((task) => {
      return(
        <div key={task._id}className='individual-class-container'>
        <Card style={{ width: '18rem', margin: '20px'}}>
        <ListGroup variant="flush">
          <ListGroup.Item style={{ height: '8rem'}} >
          <FaCheckCircle></FaCheckCircle>
          <p  style={{fontSize:'1.5rem', padding:"0px"}}>{task.taskName}</p>
          </ListGroup.Item>
          <ListGroup.Item ><h5 style={{fontSize:'1rem' }}>Points: {task.taskPoints}</h5></ListGroup.Item>
          <LinkContainer to={`/tasks/${task._id}`}  style={{borderRadius:'2px', border:'none', backgroundColor:'grey', margin:'10px 10px', padding:'2px' }}>
            <ListGroup.Item ><span style={{color:'white' }}> <FaTrashRestoreAlt/> <br/> DELETE </span></ListGroup.Item>
          </LinkContainer> 
          <LinkContainer to={`/tasks/qrcode/${task._id}`}  style={{borderRadius:'2px', border:'none', backgroundColor:'grey', margin:'10px 10px', padding:'2px'}}>
            <ListGroup.Item ><span style={{color:'white' }}> <FaQrcode/> <br/>CREATE QR CODE</span></ListGroup.Item>
          </LinkContainer> 
        </ListGroup>
          <Button style={{borderRadius:'2px', border:'none', backgroundColor:'grey', margin:"10px"}} onClick={() =>  findRemainingPoints(task.taskPoints)}>Apply points</Button>
      </Card>
      </div>
      )
    })}
    </div>

      
    </div>
  )
}

export default Tasks