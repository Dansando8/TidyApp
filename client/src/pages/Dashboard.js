import React, { useEffect, useState } from 'react'
import NewRewardForm from './NewRewardForm'
import apiService from '../apiService'
import Rewards from './Rewards'
import { Grid, Row, Col  } from 'react-bootstrap'; 


function Dashboard() {

  const[rewards, setRewards] = useState([])

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