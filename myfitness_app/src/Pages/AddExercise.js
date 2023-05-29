import React, { useState } from 'react';

const AddExercise = () => {
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
    // Do something with the submitted exercise data
    console.log(exerciseData);
  };

  return (
    <div className='Tracker'>
      <h3>Exercise Tracker</h3>
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
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddExercise;
