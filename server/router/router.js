const Express = require('express'); 
const router = Express.Router(); 
const { postReward } = require('../controllers/controllers.js')

router.post('/rewards', postReward); 

module.exports = router; 