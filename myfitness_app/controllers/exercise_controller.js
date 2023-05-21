const express = require('express')
const exercise_router= express.Router()
const = require('../models/')
const = require('../models/')
const  = require('../models/')
const  = require('../models/')


// Seed
exercise_router.get('/data/seed', (req, res) => {
    .insertMany()
        .then((createdBreads) => { res.redirect('/breads') })
})

// DestroyAll
exercise_router.get('/data/destroy', (req, res) => {
    .deleteMany()
        .then((deletedBread) => { res.redirect('/breads') })
})

// New
exercise_router.get('/new', (req, res) => {
    .find()
        .then((found) => {
            res.render('new', { : found })
        })
})

// Edit
exercise_router.get('/:id/edit', (req, res) => {
    baker_schema.find()
        .then((foundBakers) => {
            bread_schema.findById(req.params.id)
                .then((foundBread) => {
                    res.render('edit', {
                        : found,
                        : found,
                    })
                })
                .catch((err) => { console.log(err) })
        })
        .catch((err) => { console.log(err) })
})

// Show
exercise_router.get('/:id', (req, res) => {
    bread_schema.findById(req.params.id)
        .populate('baker')
        .then((foundBread) => {
            let bakedBy = foundBread.getBakedBy()
            console.log(bakedBy)
            res.render('show', { bread: foundBread })
        })
        .catch((err) => { console.log(err) })
})

// Update
exercise_router.put('/:id', (req, res) => {
    req.body.hasGluten = req.body.hasGluten === 'on'
    bread_schema.findByIdAndUpdate(String(req.params.id), req.body, { new: true })
        .then((updatedBread) => {
            console.log(updatedBread)
            res.redirect(`/breads/${req.params.id}`)
        })
        .catch((err) => { console.log(err) })
})

// Delete
exercise_router.delete('/:id', (req, res) => {
    bread_schema.findByIdAndDelete(String(req.params.id))
        .then((deletedBread) => { res.status(303).redirect('/breads') })
        .catch((err) => { console.log(err) })
})

// Index
exercise_router.get('/', async (req, res) => {
    let foundBakers = await baker_schema.find()
    let foundBreads = await bread_schema.find().limit(2)

    res.render('index', {
        breads: foundBreads,
        bakers: foundBakers,
        title: 'Index'
    })
})

// Create
exercise_router.post('/', (req, res) => {
    req.body.hasGluten = req.body.hasGluten === 'on'
    bread_schema.create(req.body)
        .catch(err => { console.log(err) })
    res.redirect('/breads')
})

module.exports = 
