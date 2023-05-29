const foodRouter = require('express').Router();
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
let Food = require('../models/food')

// Get route for a specific ID
foodRouter.get('/:id', (req, res) => {
    const foodId = req.params.id;

    if (!ObjectId.isValid(foodId)) {
        return res.status(400).json('Invalid food ID');
    }

    Food.findById(foodId)
        .then(food => {
            if (food) {
                res.json(food);
            } else {
                res.status(404).json('Food not found');
            }
        })
        .catch(error => {
            console.log('Error:', error);
            res.status(500).json('Error fetching food');
        });
});

//adding the edit route for exercises
foodRouter.put('/:id', (req, res) => {
    const foodId = req.params.id;

    if (!ObjectId.isValid(foodId)) {
        return res.status(400).json('Invalid food ID');
    }

    Food.findByIdAndUpdate(foodId, req.body, { new: true })
        .then(editedFood => {
            if (editedFood) {
                res.json('Food edited!');
            } else {
                res.status(404).json('Food not found');
            }
        })
        .catch(error => {
            console.log('Error:', error);
            res.status(500).json('Error editing food');
        });
});

// delete route for exercises
foodRouter.delete('/:id', (req, res) => {
    Food.findByIdAndDelete(req.params.id)
        .then(deletedFood => {
            if (deletedFood) {
                res.json('Food deleted!');
            } else {
                res.status(404).json('Food not found');
            }
        })
        .catch(err => {
            console.log('error', err);
            res.status(500).json('Error deleting food');
        });
})

//Index route
foodRouter.route('/').get((req, res) => {
    Food.find()
        .then(food => res.json(food))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Add route
foodRouter.route('/add').post((req, res) => {
    const name = req.body.name;
    const date = req.body.date;
    const servingSize = req.body.servingSize;
    const calories = req.body.calories;
    const timeOfDay = req.body.timeOfDay;
    const mood = req.body.mood;

    const newFood = new Food({
        name,
        date,
        servingSize,
        calories,
        timeOfDay,
        mood
    });

    newFood.save()
        .then(() => res.json('Food added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

foodRouter.route('/').get((req, res) => {
    Food.find()
        .then(food => res.json(food))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Create Route
foodRouter.route('/add').post((req, res) => {
    const name = req.body.name;
    const date = req.body.date;
    const servingSize = req.body.servingSize;
    const calories = req.body.calories;
    const timeOfDay = req.body.timeOfDay;
    const mood = req.body.mood;

    const newFood = new Food({
        name,
        date,
        servingSize,
        calories,
        timeOfDay,
        mood
    });

    newFood.save()
        .then(() => {
            res.json('Food added!')
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = foodRouter;