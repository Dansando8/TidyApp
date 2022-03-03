const mongoose = require('mongoose');


const rewardSchema = mongoose.Schema({
  reward: String, 
  points: Number, 
  imageUrl: String,  
  date: Date
}); 

module.exports = mongoose.model('Reward', rewardSchema); 
 