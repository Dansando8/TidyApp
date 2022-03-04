import React from 'react'
import { Card, Button, ProgressBar}from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment'
import Reward from './Reward'
import { LinkContainer } from 'react-router-bootstrap'

function Rewards({rewards}) {
  
  return (
    <div className="reward-container">
    {
      rewards.map((reward) =>{ 
       console.log(reward);
       return(  
        <div key = {reward._id}>
    
        <Card style={{borderRadius:'2px', margin:"20px", width: '18rem', height:'34rem' }}>
          <Card.Img src={reward.imageUrl} style={{ padding:'10px', width:'18rem', height:'18rem' }}></Card.Img>
            <Card.Body>
              <ProgressBar striped variant="warning" now={60} syle={{ padding:"10px"}}/>
              <Card.Title style={{ marginTop:'10px' }} ><h1>{reward.reward}</h1></Card.Title>
            </Card.Body>
              <Card.Text style={{ marginTop:'0px' }}>{moment(reward.date).format("YYYY-MM-DD-kk:mm")}</Card.Text>
              <Card.Text style={{ margin:'0px' }}>POINTS : {reward.points}</Card.Text>
              <LinkContainer to={`/reward/${reward._id}`} component={<Reward></Reward>}  style={{borderRadius:'2px', border:'none', backgroundColor:'grey', margin:'10px 10px' }}>
                <Button>MODIFY</Button>
              </LinkContainer>
        </Card>
        
        
     
        </div>
        )
      })
    }
    
    </div>
  )
}

export default Rewards