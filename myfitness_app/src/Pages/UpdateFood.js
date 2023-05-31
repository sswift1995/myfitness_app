import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, InputAdornment } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const UpdateFood = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [selectedDate, setSelectedDate] = useState('');

    const [food, setFood] = useState({
        name: '',
        date: '',
        servingSize: '',
        calories: '',
        timeOfDay: '',
        mood: ''
    });

    const handleNameChange = (event) => {
        const { value } = event.target;
        setFood((prevFood) => ({
            ...prevFood,
            name: value,
        }));
    };

    const handleDateChange = (date) => {
        const selectedDateWithoutTime = date ? new Date(date.getFullYear(), date.getMonth(), date.getDate()) : null;
        setSelectedDate(selectedDateWithoutTime);
        setFood((prevFood) => ({
            ...prevFood,
            date: selectedDateWithoutTime ? selectedDateWithoutTime.toISOString() : '',
        }));
    };

    const handleChange = (event) => {
        setFood((prevFood) => ({
            ...prevFood,
            [event.target.name]: event.target.value,
        }));
    };

    useEffect(() => {
        console.log('Food ID: ', id)
        fetch(`http://localhost:3000/food/${id}`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setFood({ ...data, id: data._id });
            })
            .catch(error => console.log('Error fetching food data: ', error));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const UpdatedFood = { ...food, id: id };

        fetch(`http://localhost:3000/food/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(UpdatedFood),
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
            <h3>Edit a meal</h3>
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
                    value={food.name}
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
                    name="servingSize"
                    id="servingSize"
                    label="Serving(s)"
                    variant="standard"
                    sx={{ width: '230px', height: '56px' }}
                    required
                    value={food.servingSize}
                    onChange={handleChange}
                />
                <br />
                <TextField
                    type="text"
                    name="calories"
                    id="calories"
                    label="Calories"
                    variant="standard"
                    sx={{ width: '230px', height: '56px' }}
                    value={food.calories}
                    onChange={handleChange}
                />
                <br />
                <TextField
                    type="text"
                    name="timeOfDay"
                    id="timeOfDay"
                    label="Time of day"
                    variant="standard"
                    sx={{ width: '230px', height: '56px' }}
                    value={food.timeOfDay}
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
                    value={food.mood}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button sx={{ width: '230px', height: '56px' }} variant="outlined" color="error" type="submit">
                    Edit Meal
                </Button>
            </form>
        </div>
    );
};

export default UpdateFood;