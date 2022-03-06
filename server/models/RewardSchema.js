const mongoose = require('mongoose');


const rewardSchema = mongoose.Schema({
  reward: {
    type: String,
    required: true
  }, 
  points: {
    type: Number, 
    required:true
  },
  remainingPoints: {
    type: Number, 
    required: false
  },
  accumulatedPoints:{
    type: Number, 
    required: false
  },
  imageUrl:{ 
    type:String, 
    required:true
  },  
  date: { 
    type: String, 
    required: true
  }
}); 

module.exports = mongoose.model('Reward', rewardSchema); 
