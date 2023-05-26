require('dotenv').config();
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)

module.exports.Food = require('./food')
module.exports.Exercises = require('./exercises')