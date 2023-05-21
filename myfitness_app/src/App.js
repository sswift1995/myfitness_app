import React from "react";
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from "./Pages/Home";
import ExerciseDetail from "./Pages/ExerciseDetail";
import Food from "./Pages/Food";
import Tracker from "./Pages/Tracker";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import home from './assets/home.jpg';


const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
                <Route path="/food" element={<Food />} />
                <Route path="/tracker/:id" element={<Tracker />} />
            </Routes>
            <img class="center" style={{ width: 1500, height: 850 }} src={home} alt="Home Photo" />
            <Footer />
        </div>
    )
}

export default App;