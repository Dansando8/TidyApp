import React, { useEffect, useState } from 'react'
import NewRewardForm from './NewRewardForm'
import apiService from '../apiService'
import Rewards from './Rewards'
import Tasks from './Tasks'
import TaskForm from './TaskForm'


function Dashboard() {
  
  const[rewards, setRewards] = useState([])
  console.log(rewards, " REWARDS")
  
  //Get reward list from the database
  useEffect(() => {
    const GetRewardList = async() => {
      const rewardList = await apiService.getRewards()
      setRewards(rewardList); 
    }
    GetRewardList();
  },[])
  
  //Update rewards from the NewReward form component

  const updateRewards = (savedReward) => {
    setRewards([savedReward, ...rewards])
  }

//Get Task list from the database 

const [tasks, setTasks] = useState([])

useEffect(() =>{
  const GetTaskList = async() => {
  const taskList = await apiService.findTasks()
   setTasks(taskList)
  }
  GetTaskList(); 
},[])


//Update Post list from the Tasks component 

const updateTasks = (savedTask) => {
  setTasks([savedTask, ...tasks])
  console.log(tasks)
}


//Sorting rewards and tasks by poins
rewards.sort((a,b)=> a.points - b.points); 
tasks.sort((a,b)=> a.taskPoints - b.taskPoints); 


  return (
    <div>
    <div>
     <NewRewardForm updateRewards={updateRewards}></NewRewardForm>
     </div>
     <div>
      <Rewards rewards={rewards} ></Rewards>
      <TaskForm updateTasks={updateTasks}></TaskForm>
      <Tasks tasks={tasks} ></Tasks>
      </div>
    </div>
  )
  }

export default Dashboard