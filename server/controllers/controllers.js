const  Reward = require('../models/RewardSchema.js')
const Task = require('../models/TaskSchema.js')

//Post one reward 

const postReward = async (req, res) => {
  try {
    const result = await Reward.create(req.body); 
    res.send(result).status(200)
  } catch (error) {
    console.log(error);
    res.send(error).status(500);
  }
}

// Find all rewards 

const findRewards = async (req, res) => {
  try {
    const rewards = await Reward.find({}); 
    res.send(rewards).status(200)
  } catch (error) {
    console.log(error)
    res.send(error).status(500)
  }
}

// Find one reward by ID

const findRewardByID = async(req, res) =>  {
  try {
    const { rewardId } = req.params
    const reward = await Reward.find({_id: rewardId})
    res.send(reward[0])
  } catch (error) {
    res.send(error).status(500)
    console.log(error)
  }
}

//Modify Reward information by ID

const findAndUpdateRewardByID = async(req, res) =>  {
  try {
    const { rewardId } = req.params
    const reward = await Reward.findOneAndUpdate({_id: rewardId}, req.body)
    res.send(reward)
  } catch (error) {
    res.send(error).status(500)
    console.log(error)
  }
}

//Delete Reward

const findAndDeleteRewardByID = async(req, res) => {
  try {
    const {rewardId} = req.params
    const reward = await Reward.findByIdAndDelete(rewardId)
    if(!reward) res.status(404). send('No reward found')
    res.send(reward).status(200)
  } catch (error) {
    res.send(error).status(500)
  }
}

//-----> TASKS <-------//

//Publish a new Task

const postTask = async (req, res) => {
  try {
    const result = await Task.create(req.body)
    res.send(result).status(200)
  } catch (error) {
    res.send(error).status(500)
  }
}

//Retrieve all tasks

const findTasks = async (req, res) => {
  try {
    const result = await Task.find({})
    res.send(result).status(200) 
  } catch (error) {
    res.send(error).status(500)
  }
}

//Delete a task

const findAndDeleteTaskByID = async(req, res) => {
  try {
    const {taskId} = req.params
    const task = await Task.findByIdAndDelete(taskId)
    if(!task) res.status(404). send('No task found')
    res.send(task).status(200)
  } catch (error) {
    res.send(error).status(500)
  }
}

//Find a task bi ID 

const findTaskByID = async(req, res) =>  {
  try {
    const { taskId } = req.params
    const task = await Task.find({_id: taskId})
    res.send(task[0])
  } catch (error) {
    res.send(error).status(500)
    console.log(error)
  }
}

module.exports = { 
  postReward, 
  findRewards, 
  findRewardByID, 
  findAndUpdateRewardByID,
  findAndDeleteRewardByID, 
  postTask, 
  findTasks, 
  findAndDeleteTaskByID,
  findTaskByID, 
}