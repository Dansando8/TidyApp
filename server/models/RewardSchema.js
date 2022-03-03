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
  imageUrl:{ 
    type:String, 
    required:true
  },  
  date: { 
    type: Date, 
    required: true
  }
}); 

module.exports = mongoose.model('Reward', rewardSchema); 
 