const Express = require('express'); 
const router = Express.Router(); 
const { postReward, findRewards, findRewardByID, findAndUpdateRewardByID, postTask } = require('../controllers/controllers.js')


//Post a new Reward

router.post('/rewards', postReward); 

//Get all rewards

router.get('/rewards', findRewards);

//Find a reward by Id

router.get('/rewards/:rewardId', findRewardByID); 

//Update a reward information

router.patch('/rewards/:rewardId', findAndUpdateRewardByID); 


//-----> TASKS <-------//

//Post a new Task 

router.post('/tasks', postTask); 

module.exports = router; 