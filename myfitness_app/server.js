const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const uri = "mongodb+srv://jeremylehmann06:NoNv0dG4v4BZjVzV@jeremy.vyiklkn.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


const foodRouter = require('./backend/routes/food');
const exercisesRouter = require('./backend/routes/exercises')

app.use('/exercises', exercisesRouter);
app.use('/food', foodRouter);

//Jeff entered this code
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});