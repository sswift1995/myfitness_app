import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateExercise = (data) => {


  return (
    <div>
      <h3>Update Exercise</h3>
      <form method="POST" action={`/exercises/${data.exercise.id}?_method=PUT`}>
        <label htmlFor='name'>
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
