import React from "react";
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from "./Pages/Home";
import ExerciseDetail from "./Pages/ExerciseDetail";
import Food from "./Pages/Food";
import Tracker from "./Pages/Tracker";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AddExercise from "./Pages/AddExercise";
import AddFood from "./Pages/AddFood";

const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercises" element={<ExerciseDetail />} />
                <Route path="/recipes" element={<Food />} />
                <Route path="/tracker" element={<Tracker />} />
                <Route path="/exercises/add" element={<AddExercise />} />
                <Route path="/foods/add" element={<AddFood />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;