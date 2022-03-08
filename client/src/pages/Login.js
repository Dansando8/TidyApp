import React, {useState} from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import apiService from '../apiService';
import Register from './Register';
import { BiHappyBeaming } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const userInitState = {
  email: '', 
  password: '', 
}

function Login() {
  const navigate = useNavigate();

  const [state, setState] = useState(userInitState);
  // const [sessionId, setSessionId] = useGlobalState(initialState);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleSubmit = async (e) => {
      
      e.preventDefault()
      
      const userInfo = {
        email: state.email, 
        password: state.password, 
      }

      const res = await apiService.userLogin(userInfo)
      console.log(res)
      localStorage.setItem('userId', res._id)

      if (res.error){
        alert(`${res.message}`);
        setState(userInitState);
      } else {
      console.log('loged in!')
      navigate(`/dashboard/${localStorage.getItem('userId')}`)
      }
    }

    const validateForm = () => {
      return !state.email || !state.password;
    }
    console.log(state); 
  return (
    <div>
    <Card  style={{borderRadius:'5px', margin:"20px", width: '30rem', height:'24rem' }}>
    <h1 style={{marginTop:"20px", marginBottom:'20px', marginTop:'20px'}}>Glad to see you back <BiHappyBeaming/></h1>
      <Card.Body>
        <Form onSubmit={handleSubmit}>

          <Form.Group  className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter your e-mail</Form.Label>
            <Form.Control  name="email" type="text" placeholder="user@email.com" maxLength="20" value ={state.email} onChange={handleChange} />
          </Form.Group>

          <Form.Group  className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter your password</Form.Label>  
            <Form.Control  name="password" type="password"  placeholder="Password" value ={state.password} onChange={handleChange} />
          </Form.Group>
        
          <Button variant="primary" type="submit" style={{borderRadius:'2px', border:'none', backgroundColor:'grey', margin:'10px 10px' }} disabled={validateForm()}>
            Login
          </Button>
        </Form>
      </Card.Body>
        <LinkContainer to={`/register`} component={<Register> </Register>}>
          <p>You are new ? <a href={"/register"} style={{color:"#ffc109"}}>Open an account</a></p>
          
        </LinkContainer>
    </Card>


    
    </div>
  )
}

export default Login