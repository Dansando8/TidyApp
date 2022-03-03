import React, { useEffect, useState } from 'react'
import NewRewardForm from './NewRewardForm'
import apiService from '../apiService'


function Dashboard() {

  const[rewards, setRewards] = useState('')

useEffect(() => {
  const GetRewardList = async() => {
  const rewardList = await apiService.getRewards()
  console.log(rewardList, "from use Effect"); 
  setRewards(rewardList); 
}
GetRewardList();
},[])

console.log(rewards, " after useEff"); 

  return (
    <div>
     <NewRewardForm></NewRewardForm>
    </div>
  )
  }

export default Dashboard