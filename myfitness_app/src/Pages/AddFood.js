import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, InputAdornment } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const AddFood = () => {

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
            date: selectedDate, // Selected date state (line 12)
            servingSize: event.target.servingSize.value,
            calories: event.target.calories.value,
            timeOfDay: event.target.timeOfDay.value,
            mood: event.target.mood.value
        };

        fetch('https://desolate-meadow-45244.herokuapp.com/food/add', {
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
            <h3>Add a meal</h3>
            <form onSubmit={handleSubmit}>
                <p><em>Fields with * are required</em></p>
                <TextField
                    type='text'
                    name='name'
                    id="name"
                    label="Name"
                    variant='standard'
                    sx={{ width: '230px', height: '56px' }}
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
                    name='servingSize'
                    id="servingSize"
                    label="Serving(s)"
                    variant='standard'
                    sx={{ width: '230px', height: '56px' }}
                    required
                />
                <br />
                <TextField
                    type='text'
                    name='calories'
                    id="calories"
                    label="Calories"
                    variant='standard'
                    sx={{ width: '230px', height: '56px' }}
                />
                <br />
                <TextField
                    type='text'
                    name='timeOfDay'
                    id="timeOfDay"
                    label="Time of day"
                    variant='standard'
                    sx={{ width: '230px', height: '56px' }}
                />
                <br />
                <TextField
                    type='text'
                    name='mood'
                    id="mood"
                    label="Mood"
                    variant='standard'
                    sx={{ width: '230px', height: '56px' }}
                />
                <br />
                <br />
                <Button sx={{ width: '230px', height: '56px' }} variant="outlined" color="error" type='submit'>Add Food</Button>
            </form>
        </div >
    );
};
export default AddFood;