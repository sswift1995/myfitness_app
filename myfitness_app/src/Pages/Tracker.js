import React, { useEffect, useState } from 'react';
import './Tracker.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const Tracker = () => {

  const [foods, setFoods] = useState([]);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/food')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching food data')
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        setFoods(data)
      })
      .catch(error => console.log('Error fetching food data: ', error));

    fetch('http://localhost:3000/exercises')
      .then(response => response.json())
      .then(data => setExercises(data))
      .catch(error => console.log('Error fetching exercise data: ', error));
  }, []);

  return (
    <div className='Tracker'>
      <div>
        <Link to="/exercises/add">
          <Button variant="outlined" color="error">Add Exercise</Button>
        </Link>
      </div>
      <div>
        <Link to="/foods/add">
          <Button variant="outlined" color="error">Add Food</Button>
        </Link>
      </div>
      <div>
        <h1>Food</h1>
        <div>
          {/* Render the food data */}
          {foods.map(food => (
            <div key={food.id}>
              <h2>{food.name}</h2>
              <p>Serving(s): {food.servingSize}</p>
              <p>Calories: {food.calories}</p>
              <p>Time of day: {food.timeOfDay}</p>
              <p>Mood: {food.mood}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1>Exercises</h1>
        <div>
          {/* Render the exercise data */}
          {exercises.map(exercise => (
            <div key={exercise.id}>
              <h2>{exercise.name}</h2>
              <p>Duration: {exercise.duration} minutes</p>
              <p>Sets: {exercise.sets}</p>
              <p>Reps: {exercise.reps}</p>
              <p>Mood: {exercise.mood}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

}

export default Tracker