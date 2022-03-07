const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const rewardSchema = mongoose.Schema({

  userId: {
    type: ObjectId, 
    required:true,  
  },
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
    required: true
  },
  accumulatedPoints:{
    type: Number, 
    required: true
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
