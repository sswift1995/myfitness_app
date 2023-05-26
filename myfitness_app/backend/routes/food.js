const router = require('express').Router();
let Food = require('../models/food')

router.route('/').get((req, res) => {
    Food.find()
        .then(food => res.json(food))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const servingSize = req.body.servingSize;
    const calories = req.body.calories;
    const timeOfDay = req.body.timeOfDay;
    const mood = req.body.mood;

    const newFood = new Food({
        name,
        servingSize,
        calories,
        timeOfDay,
        mood
    });

    newFood.save()
        .then(() => res.json('Food added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;