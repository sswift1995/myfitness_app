const exerciseRouter = require('express').Router();
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
let Exercise = require('../models/exercise')

//Get route for a specific ID
exerciseRouter.get('/:id', (req, res) => {
  const exerciseId = req.params.id;

  if (!ObjectId.isValid(exerciseId)) {
    return res.status(400).json('Invalid exercise ID');
  }

  Exercise.findById(exerciseId)
    .then(exercise => {
      if (exercise) {
        res.json(exercise);
      } else {
        res.status(404).json('Exercise not found');
      }
    })
    .catch(error => {
      console.log('Error:', error);
      res.status(500).json('Error fetching exercise');
    });
});

//adding the edit route for exercises
exerciseRouter.put('/:id', (req, res) => {
  const exerciseId = req.params.id;

  if (!ObjectId.isValid(exerciseId)) {
    return res.status(400).json('Invalid exercise ID');
  }

  Exercise.findByIdAndUpdate(exerciseId, req.body, { new: true })
    .then(editedExercise => {
      if (editedExercise) {
        res.json('Exercise edited!');
      } else {
        res.status(404).json('Exercise not found');
      }
    })
    .catch(error => {
      console.log('Error:', error);
      res.status(500).json('Error editing exercise');
    });
});

// delete route for exercises
exerciseRouter.delete('/:id', (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(deletedExercise => {
      if (deletedExercise) {
        res.json('Exercise deleted!');
      } else {
        res.status(404).json('Exercise not found');
      }
    })
    .catch(err => {
      console.log('error', err);
      res.status(500).json('Error deleting exercise');
    });
})

exerciseRouter.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

exerciseRouter.route('/add').post((req, res) => {
  const name = req.body.name;
  const date = req.body.date
  const duration = req.body.duration;
  const sets = req.body.sets;
  const reps = req.body.reps;
  const mood = req.body.mood;

  const newExercise = new Exercise({
    name,
    date,
    duration,
    sets,
    reps,
    mood
  });

  newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = exerciseRouter;