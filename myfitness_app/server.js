const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//code Jeff added for Mongo DB tracker
app.get('/Pages/Tracker', (req, res) => {
    res.json({ message: 'Add an item'})
})
//end of code that Jeff entered

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});