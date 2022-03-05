import React, { useEffect, useState } from 'react'
import NewRewardForm from './NewRewardForm'
import apiService from '../apiService'
import Rewards from './Rewards'
import Tasks from './Tasks'



function Dashboard() {

const[rewards, setRewards] = useState([])
console.log(rewards, " REWARDS")
//Update rewards from the NewReward form component 
const updateRewards = (newReward) => {
  console.log("Updated rewards")
  setRewards([newReward, ...rewards])
}
// useEffect(() => {
//  updateRewards()
//  .then(rewards => setRewards(rewards))
// }, [rewards])

//Get reward list from the database
useEffect(() => {
  const GetRewardList = async() => {
  const rewardList = await apiService.getRewards()
  setRewards(rewardList); 
}
GetRewardList();
},[])


//Get Task list from the database 

const [tasks, setTasks] = useState([])

useEffect(() =>{
  const GetTaskList = async() => {
  const taskList = await apiService.findTasks()
   setTasks(taskList)
  }
  GetTaskList(); 
},[])
console.log(tasks)

//Sorting rewards and tasks by poins
rewards.sort((a,b)=> a.points - b.points); 
// tasks.sort((a,b)=> a.taskPoints - b.taskPoints); 


  return (
    <div>
    <div>
     <NewRewardForm></NewRewardForm>
     </div>
     <div>
      <Rewards rewards={rewards} updateRewards={updateRewards}></Rewards>
      <Tasks ></Tasks>
      </div>
    </div>
  )
  }

export default Dashboard