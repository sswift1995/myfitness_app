import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// // Modules and Globals
// require('dotenv').config();
// let express = require('express');
// let app = express();
// const methodOverride = require('method-override');
// const bodyParser = require('body-parser');

// // Express settings
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use((req, res, next) => {
//     console.log(req.method)
//     next()
// });

// // Controllers and routes