const mongoose = require('mongoose');

const dbConnection = mongoose.connect('mongodb://127.0.0.1:27017/TiddyApp'); 
console.log('Connected to database 👽 !')

module.exports = { dbConnection }; 