import React, { useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom'
import apiService from '../apiService';


function ExecTask() {
  console.log('ExecTask()'); 


  const { points } = useParams()
  const taskPoints = parseInt(points)
  console.log(taskPoints, 'these are the points');
  
  // findRemainingPoints(pointsNumber);

  const [rewards, setRewards] = useState({})

  useEffect( ()  => {

      const GetRewardList = async() => {
        const rewardList = await apiService.getRewards()
        setRewards(rewardList); 
      }
      GetRewardList()
    },[])

    console.log(rewards.remainingPoints);

    const findRemainingPoints = async (taskPoints) => {
      rewards.forEach(reward => {
        let pointsToGoal = reward.remainingPoints - (taskPoints);
        console.log(pointsToGoal, 'points to goal')
        let reachedPoints = reward.accumulatedPoints + (taskPoints); 
        console.log(reachedPoints, 'reached points')
        
        const updatePoints = async() =>{
        await apiService.findAndUpdateRewardByID(reward._id, {remainingPoints: pointsToGoal, accumulatedPoints: reachedPoints,} ); 
        }
        updatePoints();
      });
    }

    findRemainingPoints(taskPoints); 

    
  

    console.log(rewards); 
    
    
  return (
    <div>
    
    <h1>This task has been updated</h1>

    </div>
  )
}

export default ExecTask