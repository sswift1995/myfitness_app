const mongoose = require('mongoose');
const { Schema } = mongoose;

const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: false
    },
    reps: {
        type: Number,
        required: false
    },
    mood: {
        type: String,
        required: false
    }
})

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;