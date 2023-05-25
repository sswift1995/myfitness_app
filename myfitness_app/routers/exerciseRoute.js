const express = require('express')
const router = express.Router()
const { getExercise } = require('../controllers/exercise_controller')

exercise_router.get('/', (req, res) => {
    res.status(200).json({ message: 'Get exercise '})
})

exercise_router.post('/', (req, res) => {
    res.status(200).json({ message: 'Record exercise '})
})

exercise_router.put('/:id', (req, res) => {
    res.status(200).json({ message: 'Update exercise '})
})

exercise_router.delete('/:id', (req, res) => {
    res.status(200).json({ message: 'Delete exercise '})
})