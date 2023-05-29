import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

const AddExercise = () => {

  const navigate = useNavigate();

  const [date, setDate] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      date: formData.get('date'),
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
          navigate('/tracker');
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

  const handleDateChange = (event) => {
    const inputDate = event.target.value;
    // Remove slashes from input date
    const formattedDate = inputDate.replace(/\//g, '');
    // Add slashes to the formatted date
    const displayDate = formattedDate.replace(/(\d{4})(\d{2})(\d{2})/, '$1/$2/$3');
    setDate(displayDate);
  };

  return (
    <div style={{ padding: "50px" }}>
      <h3>Add an exercise</h3>
      <form onSubmit={handleSubmit}>
        <p><em>Fields with * are required</em></p>
        <TextField
          type='text'
          name='name'
          id='name'
          label='Name'
          variant='standard'
          required
        />
        <br />
        <TextField
          type='text'
          name='date'
          id='date'
          label='Date (YYYY/MM/DD)'
          variant='standard'
          value={date}
          onChange={handleDateChange}
          required
        />
        <br />
        <TextField
          type='text'
          name='duration'
          id='duration'
          label='Duration'
          variant='standard'
          required
        />
        <br />
        <TextField
          type='text'
          name='sets'
          id='sets'
          label='Sets'
          variant='standard'
        />
        <br />
        <TextField
          type='text'
          name='reps'
          id='reps'
          label='Reps'
          variant='standard'
        />
        <br />
        <TextField
          type='text'
          name='mood'
          id='mood'
          label='Mood'
          variant='standard'
        />
        <br />
        <br />
        <Button variant="outlined" color="error" type='submit'>Add Exercise</Button>
      </form>
    </div>
  );
};

export default AddExercise;