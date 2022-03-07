import React from 'react'
import { Card, Button, ProgressBar}from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment'
import Reward from './Reward'
import { LinkContainer } from 'react-router-bootstrap'

function Rewards({rewards}) {

  return (
    <div>

    <h1>REWARDS</h1>
     
    <div className="reward-container">
    {rewards.map((reward) =>{ 
      //Updating the progress bar, move to helpers eventually
      let progress = 0; 
      const updateProgressBar = () => {
      progress = reward.accumulatedPoints / reward.points * 100
      return progress;
      }
      updateProgressBar(); 

      return(  
        <div key = {reward._id}>
          <Card style={{borderRadius:'2px', margin:"20px", width: '18rem', height:'36rem' }}>
            <Card.Img src={reward.imageUrl} style={{objectFit: 'cover',  padding:'10px', width:'18rem', height:'17rem' }}></Card.Img>
              <Card.Body>
                <ProgressBar striped variant="warning" 
                now={progress} 
                syle={{ padding:"10px"}}/>
                <Card.Title style={{ marginTop:'10px' }} ><h1>{reward.reward}</h1></Card.Title>
              </Card.Body>
                <Card.Text style={{ marginTop:'0px' }}>{moment(reward.date).format("YYYY-MM-DD-kk:mm")}</Card.Text>
                <Card.Text style={{ margin:'0px' }}>GOAL:  {reward.points}</Card.Text>
                <Card.Text style={{ margin:'0px' }}>Remaining points: {reward.remainingPoints}</Card.Text>
                <Card.Text style={{ margin:'0px' }}>Obtained points: {reward.accumulatedPoints}</Card.Text>
                <LinkContainer to={`/reward/${reward._id}`} component={<Reward></Reward>}  style={{borderRadius:'2px', border:'none', backgroundColor:'grey', margin:'10px 10px' }}>
                  <Button>MODIFY</Button>
                </LinkContainer>
          </Card>
        </div>
        )
      })
    }
    </div>
    </div>
  )
}

export default Rewards