const Express = require('express'); 
const router = Express.Router(); 
const { postReward, findRewards, findRewardByID, findAndUpdateRewardByID } = require('../controllers/controllers.js')


//Post a new reward

router.post('/rewards', postReward); 

//Get all rewards

router.get('/rewards', findRewards);

//Find a reward by Id

router.get('/rewards/:rewardId', findRewardByID); 

//Update a reward information

router.patch('/rewards/:rewardId', findAndUpdateRewardByID); 

module.exports = router; 