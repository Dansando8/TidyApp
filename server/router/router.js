const Express = require('express'); 
const router = Express.Router(); 
const { 
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
} = require('../controllers/controllers.js')


//-----> REWARDS <-------//

//Post a new Reward

router.post('/rewards', postReward); 

//Get all rewards

router.get('/rewards', findRewards);

//Find a reward by Id

router.get('/rewards/:rewardId', findRewardByID); 

//Update a reward information

router.patch('/rewards/:rewardId', findAndUpdateRewardByID); 

//Delete a reward using Id

router.delete('/rewards/:rewardId', findAndDeleteRewardByID)



//-----> TASKS <-------//

//Post a new Task 

router.post('/tasks', postTask); 

//Find Tasks

router.get('/tasks', findTasks); 

//Delete Task by ID

router.delete('/tasks/:taskId', findAndDeleteTaskByID);

//Find Task by ID

router.get('/tasks/:taskId', findTaskByID)


//-----> USERS <-------//

//Create a user 

router.post('/users', createNewUser)

//Login 
router.post('/login', userLogin)

//Profile info
router.get('/users', findProfile)

module.exports = router; 