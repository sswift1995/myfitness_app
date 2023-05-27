const router = require('express').Router();
let Exercise = require('../models/exercise')

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

//adding the edit route for exercises

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/exercises/${req.params.id}`)
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

// delete route for exercises

router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(deletedPlace => {
      res.redirect('/exercises')
    })
    .catch(err => {
      console.log('error', err)
      res.render('error404')
    })
})

module.exports = router;