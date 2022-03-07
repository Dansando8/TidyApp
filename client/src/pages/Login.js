import React, {useState, useEffect} from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import apiService from '../apiService';
import Register from './Register';

function Login() {

  const userInitState = {
    email: '', 
    password: '', 
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
  
      const User = {
        email: state.email, 
        password: state.password, 
      }
      
      // const savedReward = await apiService.addNewReward(newReward)
      // updateRewards(savedReward)
      // setState(initialState); 
    }

  return (
    <div>
    <Card  style={{borderRadius:'5px', margin:"20px", width: '30rem', height:'20rem' }}>
      <Card.Body>
        <Form onSubmit={handleSubmit}>

          <Form.Group  className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control  name="email" type="text" placeholder="user@email.com" maxLength="35" value ={state.email} onChange={handleChange} />
          </Form.Group>

          <Form.Group  className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>  
            <Form.Control  name="password" type="password"  placeholder="Password" value ={state.password} onChange={handleChange} />
          </Form.Group>
        
          <Button variant="primary" type="submit" style={{borderRadius:'2px', border:'none', backgroundColor:'grey', margin:'10px 10px' }}>
            Login
          </Button>
        </Form>
      </Card.Body>
        <LinkContainer to={`/register`} component={<Register>  </Register>}>
          <p>You dont have an account ? <a href={"/register"}>Register</a></p>
          
        </LinkContainer>
    </Card>


    
    </div>
  )
}

export default Login