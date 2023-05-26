const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./backend/routes/exercises')
const foodRouter = require('./backend/routes/food');

app.use('/exercises', exercisesRouter);
app.use('/food', foodRouter);

//code Jeff added for Mongo DB tracker
app.get('/Pages/Tracker', (req, res) => {
    res.json({ message: 'Add an item' })
})

//end of code that Jeff entered
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});