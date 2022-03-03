import React from 'react'
import { Card, Button }from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment'

function Rewards({rewards}) {
  return (
    <div className="reward-container">
    {
      rewards.map((reward) =>{ 
       console.log(reward);
       return(  
        <div key = {reward._id}>
    
        <Card style={{borderRadius:'2px', backgroundColor:'lightgray', margin:"20px", width: '18rem', height:'34rem' }}>
          <Card.Img src={reward.imageUrl} style={{ padding:'10px', width:'18rem', height:'18rem' }}></Card.Img>
            <Card.Body>
            
              <Card.Title style={{ margin:'0px' }} ><h1>{reward.reward}</h1></Card.Title>
            </Card.Body>
              <Card.Text style={{ marginTop:'0px' }}>{moment(reward.date).format("YYYY-MM-DD-kk:mm")}</Card.Text>
              <Card.Text style={{ margin:'0px' }}>POINTS : {reward.points}</Card.Text>
              <Button variant="secondary" style={{ margin:'10px 10px' }}>MODIFY</Button>
        </Card>
     
        </div>
        )
      })
    }
    
    </div>
  )
}

export default Rewards