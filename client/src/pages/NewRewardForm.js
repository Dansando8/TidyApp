import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment'
import apiService from '../apiService.js'
import { BiCrown } from 'react-icons/bi'

const timeNow = moment(Date.now()).format("YYYY-MM-DDTkk:mm"); 

const initialState = {
  reward : '', 
  points:'',
  remainingPoints: '', 
  accumulatedPoints: '', 
  imageUrl: '', 
  date: timeNow
}

function NewRewardForm({updateRewards}) {

  const [state, setState] = useState(initialState);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

  
    
  
    const handleSubmit = async (e) => {
      
      e.preventDefault()

      const userId = localStorage.getItem('userId')
      const files = document.querySelector('input[name="imageUrl"]').files
      const imageUrl = await apiService.uploadImage(files); 
  
      const newReward = {
        userId: userId,
        reward: state.reward,
        points: state.points,
        remainingPoints: state.points,
        accumulatedPoints: 0,
        imageUrl: imageUrl,
        date: state.date,  
      }
      
      const savedReward = await apiService.addNewReward(newReward)
      updateRewards(savedReward)
      setState(initialState); 
    }

  return (
    
    <div>
<Form onSubmit={handleSubmit} style={{margin:'20px', marginTop:'50px'}}>
  <Form.Group  className="mb-3" controlId="formBasicEmail">
    <Form.Label>Reward name</Form.Label>
    <Form.Control required name="reward" type="text" placeholder="Reward name 35 characters max" maxLength="35" value ={state.reward} onChange={handleChange} />
  </Form.Group>

  <Form.Group  className="mb-3" controlId="formBasicPassword">
  <Form.Label>Reward points</Form.Label>  
    <Form.Control required name="points" type="number"  placeholder="Reward points" value ={state.points} onChange={handleChange} />
    <Form.Control  name="remainingPoints" type="hidden" value={state.points} onChange={handleChange} />
  </Form.Group>
  
  <Form.Group>
  <Form.Label>Reward picture</Form.Label>  
    <Form.Control required name="imageUrl" type='file' className ='custom-file-label' value ={state.imageUrl} onChange={handleChange}></Form.Control>
  </Form.Group>

  <Form.Group>
  <Form.Label>Date</Form.Label>  
    <Form.Control required name="date" type='datetime-local' className ='custom-file-label' value ={state.date} onChange={handleChange}></Form.Control>
  </Form.Group>

  <Button variant="primary" type="submit" style={{borderRadius:'2px', border:'none', backgroundColor:'grey', marginTop:'40px', paddingTop:'10px', paddingBottom:'10px' }}>
    - <BiCrown></BiCrown> -  <br/>NEW REWARD
    
  </Button>
</Form>
  </div>
    
  )
}

export default NewRewardForm