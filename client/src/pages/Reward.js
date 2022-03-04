import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiService from '../apiService'
import { Card, Button, ProgressBar, Form, Alert}from 'react-bootstrap'
import moment from 'moment'

function Reward( ) {

  const resetReward = {
    reward : '', 
    points:'', 
    imageUrl: '', 
    date: Date
  }

  const [state, setState] = useState(resetReward) 
  const [updated, setUpdated] = useState(false); 

  const {id} = useParams()
  console.log(id)

  useEffect(() => {
    apiService.fetchRewardById(id)
    .then(rewardFound => setState(rewardFound)); 
  }, [id]); 

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
      
    e.preventDefault()

    // const files = document.querySelector('input[name="imageUrl"]').files
    // const imageUrl = await apiService.uploadImage(files); 

    const updateReward = {
      reward: state.reward,
      points: state.points,
      imageUrl: state.imageUrl,
      date: state.date
    }

    apiService.findAndUpdateRewardByID(id, updateReward); 
    
    
    if (updateReward){
      setUpdated(true)
    } else setUpdated(false)

  }

  
  return (
    <div>
    <div>
    <Card style={{borderRadius:'2px', margin:"20px", width: '18rem', height:'30rem' }}>
      <Card.Img src={state.imageUrl} style={{ padding:'10px', width:'18rem', height:'18rem' }}></Card.Img>
        <Card.Body>
          <ProgressBar striped variant="warning" now={60} syle={{ padding:"10px"}}/>
          <Card.Title style={{ marginTop:'10px' }} ><h1>{state.reward}</h1></Card.Title>
          <Card.Text style={{ marginTop:'0px' }}>{moment(state.date).format("YYYY-MM-DD-kk:mm")}</Card.Text>
          <Card.Text style={{ margin:'0px' }}>POINTS : {state.points}</Card.Text>
        </Card.Body>
          {/* <LinkContainer to={`/reward/${reward._id}`} component={<Reward></Reward>}  style={{borderRadius:'2px', border:'none', backgroundColor:'grey', margin:'10px 10px' }}> */} 
    </Card>
  </div>

    <Form> 
      <Form.Group className='d-flex'style={{margin:'10px'}}>
        <Form.Control name="reward" type='text' maxLength="35" value={state.reward} style={{marginLeft:'10px'}} onChange={handleChange} /> 
        <Button variant="primary" type="submit" style={{borderRadius:'2px', border:'none', backgroundColor:'grey', marginLeft:'10px'}} onClick={handleSubmit} >UPDATE</Button>
      </Form.Group>

      <Form.Group className='d-flex' style={{margin:'10px'}}>
        <Form.Control name="points" type='number' value={state.points} style={{marginLeft:'10px'}} onChange={handleChange} /> 
        <Button variant="primary" type="submit" style={{borderRadius:'2px', border:'none', backgroundColor:'grey', marginLeft:'10px' }} onClick={handleSubmit}>UPDATE</Button>
      </Form.Group>

      <Form.Group className='d-flex' style={{margin:'10px'}}>
        <Form.Control name="imageUrl" type='file' className ='custom-file-label' style={{marginLeft:'10px'}} onChange={handleChange} /> 
        <Button variant="primary" type="submit" style={{borderRadius:'2px', border:'none', backgroundColor:'grey', marginLeft:'10px'}} >UPDATE</Button>
      </Form.Group>

      <Form.Group className='d-flex' style={{margin:'10px'}}>
        <Form.Control name="date" type='datetime-local' className ='custom-file-label' value={moment(state.date).format("YYYY-MM-DDTkk:mm")} style={{marginLeft:'10px'}} onChange={handleChange} /> 
        <Button variant="primary" type="submit" style={{borderRadius:'2px', border:'none', backgroundColor:'grey', marginLeft:'10px'}} onClick={handleSubmit}>UPDATE</Button>
      </Form.Group>
    </Form>

    {!updated
    ? <Alert Dismissable variant="secondary">Update the information</Alert>
    : <Alert Dismissable variant="success">Infomration updated!</Alert>
    }

    </div>
  )
}

export default Reward