const  Reward = require('../models/RewardSchema.js')
const Task = require('../models/TaskSchema.js')
const User = require('../models/UserSchema.js')
const bcrypt = require('bcrypt'); 

//Post one reward 

const postReward = async (req, res) => {
  console.log(req.session, 'Session User ID')
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
    const { id } = req.body
    const rewards = await Reward.find({userId: id})
    res.send(rewards)
  } catch (error) {
    res.send(error).status(500)
    console.log(error)
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
    if(!task) res.status(404).send('No task found')
    res.send(task).status(200)
  } catch (error) {
    res.send(error).status(500)
  }
}

//Find a task by ID 

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

//-------> USERS <-----------//

const createNewUser = async(req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user)
    return res
      .status(409)
      .send({ error: '409', message: 'User already exists' });
  try {
    if (password === '') throw new Error();
    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    const user = await newUser.save();
    req.session.uid = user._id;
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ error, message: 'Could not create user' });
  }
}

//Login

const userLogin = async(req, res) => {
  try {
    
    const {email, password} = req.body; 
    const user = await User.findOne({email: email}); 
    const validatedPassword = await bcrypt.compare(password, user.password);
    console.log(validatedPassword, password); 
    if(!validatedPassword) throw new Error(); 
    req.session.uid = user._id.toString();
    console.log(req.session, "REQ SESSION from controller")
    res.status(200).send(user);
  } catch (error) {
    res
      .status(401)
      .send({error, message: 'Username or password incorrect'})
  }
}

//Finding  profile info

const findProfile = async (req, res) => {
  try {
    const { id } = req.body
    const user = await User.findOne({_id: id})
    res.send(user)
  } catch (error) {
    res.send(error).status(500)
    console.log(error)
  }
};

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
  createNewUser, 
  userLogin,
  findProfile
}