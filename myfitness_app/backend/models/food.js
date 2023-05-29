const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
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
    },
}, { collection: "foods" });

const Food = mongoose.model('Food', foodSchema)

module.exports = Food;