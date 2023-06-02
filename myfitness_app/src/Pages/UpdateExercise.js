import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, InputAdornment } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { parseISO } from 'date-fns';

const UpdateExercise = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [selectedDate, setSelectedDate] = useState('');

  const [exercise, setExercise] = useState({
    name: '',
    date: '',
    duration: '',
    sets: '',
    reps: '',
    mood: ''
  });

  const handleNameChange = (event) => {
    const { value } = event.target;
    setExercise((prevExercise) => ({
      ...prevExercise,
      name: value,
    }));
  };

  const handleDateChange = (date) => {
    const selectedDateWithoutTime = date ? new Date(date.getFullYear(), date.getMonth(), date.getDate()) : null;
    setSelectedDate(selectedDateWithoutTime);
    setExercise((prevExercise) => ({
      ...prevExercise,
      date: selectedDateWithoutTime ? selectedDateWithoutTime.toISOString() : '',
    }));
  };


  const handleChange = (event) => {
    setExercise((prevExercise) => ({
      ...prevExercise,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    console.log('Exercise ID: ', id)
    fetch(`https://desolate-meadow-45244.herokuapp.com/exercises/${id}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setExercise({ ...data, id: data._id });
        setSelectedDate(parseISO(data.date.substring(0, 10)));
      })
      .catch(error => console.log('Error fetching exercise data: ', error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const UpdatedExercise = { ...exercise, id: id };

    fetch(`https://desolate-meadow-45244.herokuapp.com/exercises/${id}`, {
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
          sx={{ width: '230px', height: '56px' }}
          required
          value={exercise.name}
          onChange={handleNameChange}
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
          type="text"
          name="duration"
          id="duration"
          label="Duration"
          variant="standard"
          sx={{ width: '230px', height: '56px' }}
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
          sx={{ width: '230px', height: '56px' }}
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
          sx={{ width: '230px', height: '56px' }}
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
          sx={{ width: '230px', height: '56px' }}
          value={exercise.mood}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button sx={{ width: '230px', height: '56px' }} variant="outlined" color="error" type="submit">
          Edit Exercise
        </Button>
      </form>
    </div>
  );
};

export default UpdateExercise;