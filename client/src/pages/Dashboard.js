import React, { useEffect, useState} from 'react'
import NewRewardForm from './NewRewardForm'
import apiService from '../apiService'
import Rewards from './Rewards'
import Tasks from './Tasks'
import TaskForm from './TaskForm'
import Profile from './Profile'
import { useParams } from 'react-router-dom'


function Dashboard() {

  
  const userId = localStorage.getItem('userId')
  const userName = localStorage.getItem('userName')

  const[rewards, setRewards] = useState([])
  
  //Get reward list from the database
  useEffect(() => {
    const GetRewardList = async() => {
      const rewardList = await apiService.getRewards(userId)
      setRewards(rewardList); 
    }
    GetRewardList();
  },[])
  
///Update rewards from the NewReward form component

  const updateRewards = (savedReward) => {
    setRewards([savedReward, ...rewards])
  }

//Get Task list from the database 

const [tasks, setTasks] = useState([])

useEffect(() =>{
  const GetTaskList = async() => {
  const taskList = await apiService.findTasks(userId)
  console.log(tasks)
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

//Updating points and progress bar when a task is done 
const [taskPoints, setTaskPoints] = useState(); 

const findRemainingPoints = async (taskPoints) => {
  function setTaskTest(taskPoints){
    setTaskPoints(taskPoints)
  }
  
  console.log(taskPoints, 'TASK POINTS')

  rewards.forEach(reward => {
    console.log(reward)
    if (reward.remainingPoints > 0){
      let pointsToGoal = reward.remainingPoints - (taskPoints);
      let obtainedPoints = reward.accumulatedPoints + (taskPoints); 
   
    const updatePoints = async() =>{
      await apiService.findAndUpdateRewardByID(reward._id, {
        remainingPoints: pointsToGoal, 
        accumulatedPoints: obtainedPoints, 
      });
      console.log(reward._id, 'REWARDS ID') 
    }
    updatePoints();
  }
  });
    const GetTaskList = async() => {
      const updatedRewards = await apiService.getRewards(userId)
      setRewards(updatedRewards)
    }
    GetTaskList();
}

const logOut = () => {
  localStorage.removeItem("userId");
}

  return (
    <div>
        <Profile logOut={logOut}></Profile>
        <hr style={{margin:'20px', marginTop:'50px'}}></hr>
    <div className='top-dashboard'>
    <div className='new-reward-form'>
        <h1>Create a new reward for {userName}</h1>
        <NewRewardForm updateRewards={updateRewards}></NewRewardForm>
    </div >
      <hr style={{margin:'20px', marginTop:'30px', marginBottom:'30px'}}></hr>
      <div >
      <h1 >REWARDS</h1>
        <Rewards rewards={rewards} ></Rewards>
      </div>
      <hr style={{margin:'20px', marginTop:'50px'}}></hr>
    </div>
    <div >
        <h1 style={{margin:'20px', marginTop:'50px'}}>TASKS & ACTIVITIES</h1>
      <TaskForm updateTasks={updateTasks}></TaskForm>
      <Tasks tasks={tasks} findRemainingPoints={findRemainingPoints} ></Tasks>
      </div>
    </div>
  )
  }

export default Dashboard