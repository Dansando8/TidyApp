const mongoose = require('mongoose');


const taskSchema = mongoose.Schema({
  taskName: {
    type: String,
    required: true
  }, 
  points: {
    type: Number, 
    required:true
  }
}); 

module.exports = mongoose.model('Task', taskSchema); 
