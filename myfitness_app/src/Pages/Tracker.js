import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Box, Typography, Grid } from '@mui/material';


const Tracker = () => {

  const [foods, setFoods] = useState([]);
  const [exercises, setExercises] = useState([]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}/${month}/${day}`;
  }

  const { id } = useParams();

  const handleDelete = (type, itemId) => {
    console.log('Deleting ', type, 'with id: ', itemId)

    const url = type === 'exercise'
      ? `http://localhost:3000/exercises/${itemId}`
      : `http://localhost:3000/food/${itemId}`;

    fetch(url, { method: 'DELETE' })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error deleting ${type}`);
        }

        // Update the corresponding state after successful deletion
        if (type === 'exercise') {
          setExercises(prevExercises => prevExercises.filter(ex => ex.id !== itemId));
        } else if (type === 'food') {
          setFoods(prevFoods => prevFoods.filter(food => food.id !== itemId));
        }
      })
      .catch(error => console.log(`Error deleting ${type}: `, error));
  }

  useEffect(() => {
    fetch('http://localhost:3000/food')
      .then(response => response.json())
      .then(data => setFoods(
        data.map(food => ({ ...food, id: food._id }))
      ))
      .catch(error => console.log('Error fetching food data: ', error));

    fetch('http://localhost:3000/exercises')
      .then(response => response.json())
      .then(data => setExercises(
        data.map(exercise => ({ ...exercise, id: exercise._id }))
      ))
      .catch(error => console.log('Error fetching exercise data: ', error));
  }, []);

  // Sort the foods array by date in ascending order
  const sortedFoods = [...foods].sort((a, b) => new Date(a.date) - new Date(b.date));

  // Sort the exercises array by date in ascending order
  const sortedExercises = [...exercises].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
 TrackerExercisesFood
    <div>
      <Box display="flex" justifyContent="space-between" marginBottom="20px">
        <div>

   
    <div className="background-container" style={{
      fontSize: '20px',
      textAlign: 'center',
    }}>
      Workout 🗸 Meal 🗸
      <br/>
      <br/>
      Now let's track your progress by adding your workout and meal to the tracker below. 
      <Box display="flex" justifyContent="center" margin="20px">
      <div style={{ margin: '0 20px' }}>

          <Link to="/foods/add">
            <Button variant="outlined" color="error">Add Food</Button>
          </Link>
        </div>
        <div style={{ margin: '0 20px' }}>
          <Link to="/exercises/add">
            <Button variant="outlined" color="error">Add Exercise</Button>
          </Link>
        </div>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <div style={{ padding: "20px" }}>
            <Typography variant="h4" component="h1" gutterBottom>Food</Typography>
            <Grid container spacing={2}>
              {sortedFoods.map(food => (
                <Grid item xs={12} sm={4} key={food.id}>
                  <Box marginBottom="20px">
                    <Typography variant="h5" component="h2">{food.name}</Typography>
                    <Typography>Date: {formatDate(food.date)}</Typography>
                    <Typography>Serving(s): {food.servingSize}</Typography>
                    <Typography>Calories: {food.calories}</Typography>
                    <Typography>Time of day: {food.timeOfDay}</Typography>
                    <Typography>Mood: {food.mood}</Typography>
                    <Button
                      size='small'
                      color="error"
                      type='submit'
                      onClick={() => handleDelete('food', food.id)}
                    >
                      Delete
                    </Button>
                    <Link to={`/food/edit/${food.id}`}>
                      <Button size='small' color="error">Edit</Button>
                    </Link>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          <div style={{ padding: "20px" }}>
            <Typography variant="h4" component="h1" gutterBottom>Exercises</Typography>
            <Grid container spacing={2}>
              {sortedExercises.map(exercise => (
                <Grid item xs={12} sm={4} key={exercise.id}>
                  <Box marginBottom="20px">
                    <Typography variant="h5" component="h2">{exercise.name}</Typography>
                    <Typography>Date: {formatDate(exercise.date)}</Typography>
                    <Typography>Duration: {exercise.duration} minutes</Typography>
                    <Typography>Sets: {exercise.sets}</Typography>
                    <Typography>Reps: {exercise.reps}</Typography>
                    <Typography>Mood: {exercise.mood}</Typography>
                    <Button
                      size='small'
                      color="error"
                      type='submit'
                      onClick={() => handleDelete('exercise', exercise.id)}
                    >
                      Delete
                    </Button>
                    <Link to={`/exercise/edit/${exercise.id}`}>
                      <Button size='small' color="error">Edit</Button>
                    </Link>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  

  );
}

export default Tracker;