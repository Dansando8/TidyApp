import React, { useEffect, useState } from 'react'
import NewRewardForm from './NewRewardForm'
import apiService from '../apiService'
import Rewards from './Rewards'



function Dashboard() {

  const[rewards, setRewards] = useState([])

useEffect(() => {
  const GetRewardList = async() => {
  const rewardList = await apiService.getRewards()
  setRewards(rewardList); 
}
GetRewardList();
},[])

rewards.sort((a,b)=> a.points - b.points); 


  return (
    <div>
    <div>
     <NewRewardForm></NewRewardForm>
     </div>
     <div>
      <Rewards rewards={rewards}></Rewards>
      </div>
    </div>
  )
  }

export default Dashboard