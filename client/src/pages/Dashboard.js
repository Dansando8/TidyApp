import React, { useEffect, useState } from 'react'
import NewRewardForm from './NewRewardForm'
import apiService from '../apiService'
import Rewards from './Rewards'
import Tasks from './Tasks'



function Dashboard() {

const[rewards, setRewards] = useState([])

//Get reward list from the database
useEffect(() => {
  const GetRewardList = async() => {
  const rewardList = await apiService.getRewards()
  setRewards(rewardList); 
}
GetRewardList();
},[rewards])

//Get Task list from the database 

const [tasks, setTasks] = useState({})

useEffect(async () =>{
  const GetTaskList = async() => {

  }
})

rewards.sort((a,b)=> a.points - b.points); 


  return (
    <div>
    <div>
     <NewRewardForm></NewRewardForm>
     </div>
     <div>
      <Rewards rewards={rewards}></Rewards>
      <Tasks></Tasks>
      </div>
    </div>
  )
  }

export default Dashboard