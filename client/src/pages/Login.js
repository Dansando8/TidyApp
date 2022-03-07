import React, {useState, useEffect} from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import apiService from '../apiService';
import Register from './Register';
import {BiHappyBeaming} from 'react-icons/bi'

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
    <Card  style={{borderRadius:'5px', margin:"20px", width: '30rem', height:'22rem' }}>
      <Card.Body>
        <h1>Glad to see you back <BiHappyBeaming/> </h1>
        <Form onSubmit={handleSubmit}>

          <Form.Group  className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter your e-mail</Form.Label>
            <Form.Control  name="email" type="text" placeholder="user@email.com" maxLength="20" value ={state.email} onChange={handleChange} />
          </Form.Group>

          <Form.Group  className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter your password</Form.Label>  
            <Form.Control  name="password" type="password"  placeholder="Password" value ={state.password} onChange={handleChange} />
          </Form.Group>
        
          <Button variant="primary" type="submit" style={{borderRadius:'2px', border:'none', backgroundColor:'grey', margin:'10px 10px' }}>
            Login
          </Button>
        </Form>
      </Card.Body>
        <LinkContainer to={`/register`} component={<Register> </Register>}>
          <p>You are new ? <a href={"/register"}>Open an account</a></p>
          
        </LinkContainer>
    </Card>


    
    </div>
  )
}

export default Login