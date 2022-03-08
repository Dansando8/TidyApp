import React, { useEffect, useState} from 'react'
import NewRewardForm from './NewRewardForm'
import apiService from '../apiService'
import Rewards from './Rewards'
import Tasks from './Tasks'
import TaskForm from './TaskForm'
import Profile from './Profile'
import { useParams } from 'react-router-dom'


function Dashboard() {

  const { id } = useParams(); 
  console.log(id, "this is the Id as Params FROM DASHBOARD");
  const userId = localStorage.getItem('userId')
  console.log(userId, 'USER ID') 
 
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
// const [taskPoints, setTaskPoints] = useState(); 

// const findRemainingPoints = async (taskPoints) => {
//   function setTaskTest(taskPoints){
//     setTaskPoints(taskPoints)
//   }
  
//   rewards.forEach(reward => {
//     let pointsToGoal = reward.remainingPoints + (taskPoints);
    
//     const updatePoints = async() =>{
//       await apiService.findAndUpdateRewardByID(reward._id, {remainingPoints: pointsToGoal}); 
//     }
//     updatePoints();
//   });
//     const GetTaskList = async() => {
//       const updatedRewards = await apiService.getRewards()
//       setRewards(updatedRewards)
//     }
//     GetTaskList();
// }

  return (
    <div>
        <Profile></Profile>
    <div className='top-dashboard'>
    <div className='new-reward-form'>
        <h1>Create a new reward</h1>
        <NewRewardForm updateRewards={updateRewards}></NewRewardForm>
    </div >
      <div>
        <Rewards rewards={rewards} ></Rewards>
      </div>
    </div>
    <div>
      <TaskForm updateTasks={updateTasks}></TaskForm>
      <Tasks tasks={tasks} ></Tasks>
      </div>
    </div>
  )
  }

export default Dashboard