import React, { useState } from 'react';

const AddExercise = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      duration: formData.get('duration'),
      sets: formData.get('sets'),
      reps: formData.get('reps'),
      mood: formData.get('mood')
    };

    fetch('http://localhost:3000/exercises/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.status)
        }
      })
      .then((data) => {
        console.log('Success: ', data);
      })
      .catch((error) => {
        console.log('Error: ', error)
      });
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
            id='name'
          />
        </label>
        <br />
        <label>
          Duration:
          <input
            type='text'
            name='duration'
            id="duration"
          />
        </label>
        <br />
        <label>
          Sets:
          <input
            type='text'
            name='sets'
            id="sets"
          />
        </label>
        <br />
        <label>
          Reps:
          <input
            type='text'
            name='reps'
            id='reps'
          />
        </label>
        <br />
        <label>
          Mood:
          <input
            type='text'
            name='mood'
            id="mood"
          />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddExercise;
