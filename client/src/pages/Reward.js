import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiService from '../apiService'
import { Card, Button, Form, Alert }from 'react-bootstrap'
import moment from 'moment'
import {LinkContainer} from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'

function Reward() {

  const navigate = useNavigate()

  const resetReward = {
    reward : '', 
    points:'',
    remainingPoints: '', 
    accumulatedPoints: '',  
    imageUrl: '', 
    date: Date
  }

  const [state, setState] = useState(resetReward) 
  const [updated, setUpdated] = useState(false); 

  const {id} = useParams()

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

    const updatedRemPoints = state.points + state.accumulatedPoints;
    console.log(updatedRemPoints)

    const updateReward = {
      reward: state.reward,
      points: state.points,
      imageUrl: state.imageUrl,
      remainingPoints: updatedRemPoints,
      date: state.date
    }
    apiService.findAndUpdateRewardByID(id, updateReward); 
    if (updateReward){
      setUpdated(true)
    } else setUpdated(false)
  }

  const handleImageUpdate = async (e, rear) => {
    e.preventDefault()
    const files = document.querySelector('input[name="imageUrl"]').files
    const imageUrl = await apiService.uploadImage(files); 
    
    const updatedInfo = {
      reward: state.reward,
      points: state.points,
      imageUrl: imageUrl,
      date: state.date
    }
    await apiService.findAndUpdateRewardByID(id, updatedInfo); 
    setState(updatedInfo)
  }

  const handleDelete =  async () => {
    try {
      await apiService.findAndDeleteRewardByID(id);
    } catch (error) {
      console.log(error); 
    }
    navigate(`/dashboard/${userId}`)
  }

  const userId = localStorage.getItem('userId')
  
  return (
    <div>
    <div>
    <Card style={{borderRadius:'2px', margin:"20px", width: '18rem', height:'30rem' }}>
      <Card.Img src={state.imageUrl} style={{ objectFit: 'cover', padding:'10px', width:'18rem', height:'18rem' }}></Card.Img>
          <Card.Title style={{ marginTop:'10px' }} ><h1>{state.reward}</h1></Card.Title>
        <Card.Body>
          <Card.Text style={{ marginTop:'0px' }}>{moment(state.date).format("YYYY-MM-DD-kk:mm")}</Card.Text>
          <Card.Text style={{ margin:'0px' }}>POINTS : {state.points}</Card.Text>
        </Card.Body>
    </Card>
  </div>

    <Form> 
      <Form.Group className='d-flex'style={{margin:'10px'}}>
        <Form.Control name="reward" type='text' maxLength="35" value={state.reward} style={{marginLeft:'10px'}} onChange={handleChange} /> 
        <Button variant="primary" type="submit" style={{borderRadius:'2px', border:'none', backgroundColor:'grey', marginLeft:'10px'}} onClick={handleSubmit} >UPDATE</Button>
      </Form.Group>

      <Form.Group className='d-flex' style={{margin:'10px'}}>
        <Form.Control  name="points" type='number' value={state.points} style={{marginLeft:'10px'}} onChange={handleChange} /> 
        <Button variant="primary" type="submit" style={{borderRadius:'2px', border:'none', backgroundColor:'grey', marginLeft:'10px' }} onClick={handleSubmit}>UPDATE</Button>
      </Form.Group>

      <Form.Group className='d-flex' style={{margin:'10px'}}>
        <Form.Control required name="imageUrl" type='file' className ='custom-file-label' style={{marginLeft:'10px'}} onChange={handleChange} /> 
        <Button variant="primary" type="submit" style={{borderRadius:'2px', border:'none', backgroundColor:'grey', marginLeft:'10px'}} onClick={handleImageUpdate}>UPDATE</Button>
      </Form.Group>

      <Form.Group className='d-flex' style={{margin:'10px'}}>
        <Form.Control name="date" type='datetime-local' className ='custom-file-label' value={moment(state.date).format("YYYY-MM-DDTkk:mm")} style={{marginLeft:'10px'}} onChange={handleChange} /> 
        <Button variant="primary" type="submit" style={{borderRadius:'2px', border:'none', backgroundColor:'grey', marginLeft:'10px'}} onClick={handleSubmit}>UPDATE</Button>
      </Form.Group>
    </Form>

      <Button variant="primary"  style={{borderRadius:'2px', border:'none', backgroundColor:'grey', marginLeft:'10px'}} onClick={handleDelete}>DELETE REWARD</Button> 

    
    <LinkContainer to={`/dashboard/${userId}`} style={{borderRadius:'2px', border:'none', backgroundColor:'grey', margin:'10px 10px' }}>
        <Button>Dashboard</Button>
    </LinkContainer>

    {!updated
    ? <Alert dismissable='true' variant="secondary">Update the information</Alert>
    : <Alert dismissable='true' variant="success">Infomration updated!</Alert>
    }

    </div>
  )
}

export default Reward