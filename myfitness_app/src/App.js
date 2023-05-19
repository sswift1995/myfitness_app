import React from "react";
import { Route, Routes } from 'react-router-dom';

import './App.css';
import ExerciseDetail from "./Pages/ExerciseDetail";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";


const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;