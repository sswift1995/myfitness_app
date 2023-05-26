// const router = require('express').Router();
// let Exercise = require('../models/exercise')

// router.route('/').get((req, res) => {
//   Exercise.find()
//     .then(exercises => res.json(exercises))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//   const name = req.body.name;
//   const duration = req.body.duration;
//   const sets = req.body.sets;
//   const reps = req.body.reps;
//   const mood = req.body.mood;

//   const newExercise = new Exercise({
//     name,
//     duration,
//     sets,
//     reps,
//     mood
//   });

//   newExercise.save()
//     .then(() => res.json('Exercise added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// module.exports = router;

//JSS suggested code

import { Router } from 'express';
import Exercise from '../models/exercise';

const router = Router();

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const duration = req.body.duration;
  const sets = req.body.sets;
  const reps = req.body.reps;
  const mood = req.body.mood;

  const newExercise = new Exercise({
    name,
    duration,
    sets,
    reps,
    mood
  });

  newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

export default router;
