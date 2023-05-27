import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateExercise = () => {
  const navigate = useNavigate();

  const [exerciseData, setExerciseData] = useState({
    name: '',
    duration: '',
    sets: '',
    reps: '',
    mood: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExerciseData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the submitted exercise data (e.g., update the data using an API call)
    console.log(exerciseData);
    // Redirect to the desired route after updating the exercise data
    navigate.push('/tracker'); // Replace '/exercise' with the appropriate route path
  };

  return (
    <div>
      <h3>Update Exercise</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={exerciseData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Duration:
          <input
            type='text'
            name='duration'
            value={exerciseData.duration}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Sets:
          <input
            type='text'
            name='sets'
            value={exerciseData.sets}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Reps:
          <input
            type='text'
            name='reps'
            value={exerciseData.reps}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Mood:
          <input
            type='text'
            name='mood'
            value={exerciseData.mood}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default UpdateExercise;
