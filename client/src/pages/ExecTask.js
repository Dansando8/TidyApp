import React, { useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom'
import apiService from '../apiService';
import { BsCheckCircle } from 'react-icons/bs'
import solo from '../assets/soloLogo.png'




function ExecTask() {
  console.log('ExecTask()'); 


  const { points } = useParams()
  const taskPoints = parseInt(points)
  console.log(taskPoints, 'these are the points');
  
  // findRemainingPoints(pointsNumber);

  const userId = localStorage.getItem('userId')

  const [rewards, setRewards] = useState({})

    const findRemainingPoints = async (taskPoints) => {
      rewards.forEach(reward => {
        if(reward.remainingPoints !==0 ){
        let pointsToGoal = reward.remainingPoints - (taskPoints);
        console.log(pointsToGoal, 'points to goal')
        let reachedPoints = reward.accumulatedPoints + (taskPoints); 
        console.log(reachedPoints, 'reached points')
        
        const updatePoints = async() =>{
        await apiService.findAndUpdateRewardByID(reward._id, {remainingPoints: pointsToGoal, accumulatedPoints: reachedPoints,} ); 
        }
        updatePoints();
      }
      });
    }

    findRemainingPoints(taskPoints); 

    useEffect( ()  => {
      const GetRewardList = async() => {
        const rewardList = await apiService.getRewards(userId)
        console.log(rewardList)
        setRewards(rewardList); 
      }
      GetRewardList()
    },[])

    
    console.log(rewards, 'UPDATED REWARDS')

  return (
    <div className='task-done-container'>

    <div id='task-done'>
    <img src={solo} alt='TidyApp logo' style={{width: '10rem', marginRight:'30px', marginBottom:'20px', marginTop:'50px'}}></img>
    <h1 id='task-done-message'>Your activity points have been updated</h1>
    <BsCheckCircle id='check-circle-done'></BsCheckCircle>
    </div>
    <div className="reward-container">
    </div>
    </div>
  )
}

export default ExecTask