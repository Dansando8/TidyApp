const Express = require('express'); 
const router = Express.Router(); 
const { postReward, findRewards } = require('../controllers/controllers.js')

router.post('/rewards', postReward); 

router.get('/rewards', findRewards);

module.exports = router; 