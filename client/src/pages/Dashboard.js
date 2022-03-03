import React, { useEffect, useState } from 'react'
import NewRewardForm from './NewRewardForm'
import apiService from '../apiService'


function Dashboard() {

  const[rewards, setRewards] = useState('')

useEffect(() => {
  apiService.getRewards()
   
},[])

  return (
    <div>
     <NewRewardForm></NewRewardForm>
    </div>
  )
  }

export default Dashboard