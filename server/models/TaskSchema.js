const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;


const taskSchema = mongoose.Schema({
  userId: {
    type: ObjectId, 
    required:true,  
  },
  taskName: {
    type: String,
    required: true
  }, 
  taskPoints: {
    type: Number, 
    required:true
  }
}); 

module.exports = mongoose.model('Task', taskSchema); 
