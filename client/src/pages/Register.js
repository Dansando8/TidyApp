import React, {useState, useEffect} from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import apiService from '../apiService';

function Register() {

  const userInitState = {
    name: '', 
    mail: '', 
    password: '', 
    profilePictureURL: '', 

  }

  const [state, setState] = useState(userInitState);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleSubmit = async (e) => {
      
      e.preventDefault()

      const files = document.querySelector('input[name="imageUrl"]').files
      const imageUrl = await apiService.uploadImage(files); 
  
      const User = {
        reward: state.reward,
        points: state.points,
        remainingPoints: state.points,
        accumulatedPoints: 0,
        imageUrl: imageUrl,
        date: state.date
      }
      
      // const savedReward = await apiService.addNewReward(newReward)
      // updateRewards(savedReward)
      // setState(initialState); 
    }
  return (
    <div>
    
    <Card  style={{borderRadius:'5px', margin:"20px", width: '30rem', height:'30rem' }}>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group  className="mb-3" controlId="formBasicEmail">
            <Form.Label>User name</Form.Label>
            <Form.Control  name="reward" type="text" placeholder="Reward name 35 characters max" maxLength="35" value ={state.reward} onChange={handleChange} />
          </Form.Group>

          <Form.Group  className="mb-3" controlId="formBasicEmail">
            <Form.Label>mail</Form.Label>
            <Form.Control  name="reward" type="text" placeholder="Reward name 35 characters max" maxLength="35" value ={state.reward} onChange={handleChange} />
          </Form.Group>

          <Form.Group  className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>  
            <Form.Control  name="points" type="number"  placeholder="Reward points" value ={state.points} onChange={handleChange} />
            <Form.Control  name="remainingPoints" type="hidden" value={state.points} onChange={handleChange} />
          </Form.Group>
          
          <Form.Group>
          <Form.Label>Profile picture</Form.Label>  
            <Form.Control  name="imageUrl" type='file' className ='custom-file-label' value ={state.imageUrl} onChange={handleChange}></Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" style={{borderRadius:'2px', border:'none', backgroundColor:'grey', margin:'10px 10px' }}>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
    
    </div>
  )
}

export default Register