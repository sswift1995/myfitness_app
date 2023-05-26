const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    servingSize: {
        type: Number,
        required: true
    },
    calories: {
        type: Number,
        required: false
    },
    timeOfDay: {
        type: String,
        required: false
    },
    mood: {
        type: String,
        required: false
    }
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food;