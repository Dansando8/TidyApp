import React, {useState, useEffect} from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import apiService from '../apiService';

function Register() {

  const userInitState = {
    userName: '', 
    email: '', 
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
      const profilePictureURL = await apiService.uploadImage(files); 
  
      const newUser = {
        userName: state.userName,
        email: state.email,
        password: state.password,
        profilePictureURL: profilePictureURL
      }
      
      // const savedReward = await apiService.addNewReward(newReward)
      // updateRewards(savedReward)
      // setState(initialState); 
    }
  return (
    <div className ='register-form'>
    
    <Card  style={{borderRadius:'5px', margin:"20px", width: '30rem', height:'27rem' }}>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group  className="mb-3" controlId="formBasicEmail">
            <Form.Label>User name</Form.Label>
            <Form.Control  name="userName" type="text" placeholder="Choose a username" maxLength="35" value ={state.reward} onChange={handleChange} />
          </Form.Group>

          <Form.Group  className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control  name="email" type="text" placeholder="Set the email you will login with" maxLength="35" value ={state.reward} onChange={handleChange} />
          </Form.Group>

          <Form.Group  className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>  
            <Form.Control  name="password" type="number"  placeholder="Set your password" value ={state.points} onChange={handleChange} />
            <Form.Control  name="remainingPoints" type="hidden" value={state.points} onChange={handleChange} />
          </Form.Group>
          
          <Form.Group>
          <Form.Label>Profile picture</Form.Label>  
            <Form.Control  name="profilePictureURL" type='file' className ='custom-file-label' value ={state.imageUrl} onChange={handleChange}></Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" style={{borderRadius:'2px', border:'none', backgroundColor:'grey', margin:'20px 10px' }}>
            Register
          </Button>
        </Form>
      </Card.Body>
    </Card>
    
    </div>
  )
}

export default Register