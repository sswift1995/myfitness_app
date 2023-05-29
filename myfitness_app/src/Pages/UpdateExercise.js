import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateExercise = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [exercise, setExercise] = useState({
    name: '',
    date: '',
    duration: '',
    sets: '',
    reps: '',
    mood: ''
  });

  useEffect(() => {
    console.log('Exercise ID: ', id)
    fetch(`http://localhost:3000/exercises/${id}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setExercise({ ...data, id: data._id });
      })
      .catch(error => console.log('Error fetching exercise data: ', error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const UpdatedExercise = { ...exercise, id: id };

    fetch(`http://localhost:3000/exercises/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(UpdatedExercise),
    })
      .then((response) => {
        if (response.ok) {
          navigate('/tracker');
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
    navigate('/tracker')
  };

  const handleChange = (event) => {
    setExercise((prevExercise) => ({
      ...prevExercise,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div style={{ padding: '50px' }}>
      <h3>Edit an exercise</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <em>Fields with * are required</em>
        </p>
        <TextField
          type="text"
          name="name"
          id="name"
          label="Name"
          variant="standard"
          required
          value={exercise.name}
          onChange={handleChange}
        />
        <br />
        <TextField
          type="text"
          name="date"
          id="date"
          label="Date (YYYY/MM/DD)"
          variant="standard"
          required
          value={exercise.date}
          onChange={handleChange}
        />
        <br />
        <TextField
          type="text"
          name="duration"
          id="duration"
          label="Duration"
          variant="standard"
          required
          value={exercise.duration}
          onChange={handleChange}
        />
        <br />
        <TextField
          type="text"
          name="sets"
          id="sets"
          label="Sets"
          variant="standard"
          value={exercise.sets}
          onChange={handleChange}
        />
        <br />
        <TextField
          type="text"
          name="reps"
          id="reps"
          label="Reps"
          variant="standard"
          value={exercise.reps}
          onChange={handleChange}
        />
        <br />
        <TextField
          type="text"
          name="mood"
          id="mood"
          label="Mood"
          variant="standard"
          value={exercise.mood}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="outlined" color="error" type="submit">
          Add Exercise
        </Button>
      </form>
    </div>
  );
};

export default UpdateExercise;