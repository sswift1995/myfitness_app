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
      <h3 style={{ marginRight: '150px', marginTop: '75px' }}>Exercise Tracker</h3>
      <form onSubmit={handleSubmit}>
      <label style={{ marginBottom: '10px' }}>
          Name:
          <input
            type='text'
            name='name'
            value={exerciseData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label style={{ marginBottom: '10px' }}>
          Duration:
          <input
            type='text'
            name='duration'
            value={exerciseData.duration}
            onChange={handleChange}
          />
        </label>
        <br />
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
        <button type='submit'
        style={{
					backgroundColor: '#4285f4',
					color: '#fff',
					padding: '10px 20px',
					fontSize: '16px',
					border: 'none',
					borderRadius: '4px',
					cursor: 'pointer'
				}}
        
        >Submit</button>
      </form>
    </div>
  );
};

export default AddExercise;
