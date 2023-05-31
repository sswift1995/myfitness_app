import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, InputAdornment } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const AddExercise = () => {

  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(null);
  const [date, setDate] = useState('')

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDate(date ? date.toISOString().slice(0, 10) : '');
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      date: selectedDate, // Use the selectedDate state instead
      duration: event.target.duration.value,
      sets: event.target.sets.value,
      reps: event.target.reps.value,
      mood: event.target.mood.value
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
        <br />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date"
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => (
              <TextField
                {...params}
                name="date"
                id="date"
                variant="standard"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EventIcon />
                    </InputAdornment>
                  ),
                }}
                value={selectedDate ? selectedDate.toISOString().slice(0, 10) : ''}
                sx={{ width: '200px', height: '56px' }}
              />
            )}
          />
        </LocalizationProvider>
        <br />
        <TextField
          type='text'
          name='duration'
          id='duration'
          label='Duration'
          variant='standard'
          sx={{ width: '230px', height: '56px' }}
          required
        />
        <br />
        <TextField
          type='text'
          name='sets'
          id='sets'
          label='Sets'
          variant='standard'
          sx={{ width: '230px', height: '56px' }}
        />
        <br />
        <TextField
          type='text'
          name='reps'
          id='reps'
          label='Reps'
          variant='standard'
          sx={{ width: '230px', height: '56px' }}
        />
        <br />
        <TextField
          type='text'
          name='mood'
          id='mood'
          label='Mood'
          variant='standard'
          sx={{ width: '230px', height: '56px' }}
        />
        <br />
        <br />
        <Button sx={{ width: '230px', height: '56px' }} variant="outlined" color="error" type='submit'>Add Exercise</Button>
      </form>
    </div>
  );
};

export default AddExercise;