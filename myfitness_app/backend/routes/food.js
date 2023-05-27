const router = require('express').Router();
let Food = require('../models/food')

router.route('/').get((req, res) => {
    Food.find()
        .then(food => res.json(food))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Create Route
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const servingSize = req.body.servingSize;
    const calories = req.body.calories;
    const timeOfDay = req.body.timeOfDay;
    const foodMood = req.body.foodMood;

    const newFood = new Food({
        name,
        servingSize,
        calories,
        timeOfDay,
        foodMood
    });

    newFood.save()
        .then(() => res.json('Food added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update route
router.put('/:id', (req, res) => {
    db.Food.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/food/${req.params.id}`)
        })
        .catch(err => {
            console.log('error', err)
            res.render('error 404')
        })
})

// Delete route
router.delete('/:id', (req, res) => {
    db.Food.findByIdAndDelete(req.params.id)
        .then(deletedFood => {
            res.redirect('/tracker')
        })
        .catch(err => {
            console.log('error: ', err)
            res.render("error 404")
        })
})

module.exports = router;