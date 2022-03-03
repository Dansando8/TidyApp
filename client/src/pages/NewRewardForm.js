import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment'

const timeNow = moment(Date.now()).format("YYYY-MM-DDTkk:mm"); 

const initialState = {
  reward : '', 
  points:'', 
  imageUrl: '',
  imageAlt: '',  
  date: timeNow
}
function NewRewardForm() {

    const [state, setState] = useState(initialState);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };


  return (
    <div>
<Form>
  <Form.Group   className="mb-3" controlId="formBasicEmail" >
    <Form.Label>Reward name</Form.Label>
    <Form.Control name="reward" type="text" placeholder="Reward name" value ={state.reward} onChange={handleChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Reward points</Form.Label>  
    <Form.Control name="points" type="number"  placeholder="Reward points" value ={state.points} onChange={handleChange} />
  </Form.Group>
  
  <Form.Group>
  <Form.Label>Reward picture</Form.Label>  
    <Form.Control name="imageUrl" type='file' className ='custom-file-label' value ={state.imageUrl} onChange={handleChange}></Form.Control>
  </Form.Group>

  <Form.Group>
  <Form.Label>Date</Form.Label>  
    <Form.Control name="date" type='datetime-local' className ='custom-file-label' value ={state.date} onChange={handleChange}></Form.Control>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

    </div>
  )
}

export default NewRewardForm