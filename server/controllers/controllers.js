const  Reward = require('../models/RewardSchema.js')

//Post one reward 

const postReward = async (req, res) => {
  try {
    const result = await Reward.create(req.body); 
    res.send(result); 
    res.status(200)
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
    console.log(rewardId, ' reward id')
    const reward = await Reward.findOneAndUpdate({_id: rewardId}, req.body)
    res.send(reward)
  } catch (error) {
    res.send(error).status(500)
    console.log(error)
  }
}

module.exports = { postReward, findRewards, findRewardByID, findAndUpdateRewardByID}