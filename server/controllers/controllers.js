const  Reward = require('../models/RewardSchema.js')

const postReward = async (req, res) => {
  try {
    const result = await Reward.create(req.body); 
    console.log(req.body); 
    res.send(result); 
    res.status(200)
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}

module.exports = { postReward }