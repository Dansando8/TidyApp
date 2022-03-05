import React,{useEffect, useState} from 'react'
import {Button, Card, ListGroup, Link} from 'react-bootstrap'



function Tasks({tasks}) {

console.log(tasks, "from Tasks component"); 

  return (
    <div>
    <h1>TASKS</h1>

    <div className='tasks-container'>
    {tasks.map((task) => {
      return(
        <div key={task._id}className='individual-class-container'>
        <Card style={{ width: '18rem', margin: '20px'}}>
        <ListGroup variant="flush">
          {/* <ListGroup.Item>ICON HERE</ListGroup.Item> */}
          <ListGroup.Item><h1>{task.taskName}</h1></ListGroup.Item>
          <ListGroup.Item><h1>Points: {task.taskPoints}</h1></ListGroup.Item>
          <ListGroup.Item><h1>Points: {task.taskPoints}</h1></ListGroup.Item>
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