import './App.css';

import Home from "./Pages/Home";
import ExerciseDetail from "./Pages/ExerciseDetail";
import Food from "./Pages/Food";
import Tracker from "./Pages/Tracker";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AddExercise from "./Pages/AddExercise";
import AddFood from "./Pages/AddFood";
import UpdateExercise from "./Pages/UpdateExercise";
import UpdateFood from './Pages/UpdateFood';

import { Routes, Route } from 'react-router-dom';

const App = ({ id }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <div style={{
                flexGrow: '1',
                paddingTop: '10px',
                paddingBottom: '10px',
                overflowY: 'auto'
            }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/exercises" element={<ExerciseDetail />} />
                    <Route path="/recipes" element={<Food />} />
                    <Route path="/exercises/add" element={<AddExercise />} />
                    <Route path="/foods/add" element={<AddFood />} />
                    <Route path='/tracker' element={<Tracker />} />
                    <Route path='/exercise/edit/:id' element={<UpdateExercise />} />
                    <Route path='/food/edit/:id' element={<UpdateFood />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;