import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateFood = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [food, setFood] = useState({
        name: '',
        date: '',
        servingSize: '',
        calories: '',
        timeOfDay: '',
        mood: ''
    });

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

    const handleChange = (event) => {
        setFood((prevFood) => ({
            ...prevFood,
            [event.target.name]: event.target.value,
        }));
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
                    required
                    value={food.name}
                    onChange={handleChange}
                />
                <br />
                <TextField
                    type="text"
                    name="date"
                    id="date"
                    label="Date"
                    variant="standard"
                    required
                    value={food.date}
                    onChange={handleChange}
                />
                <br />
                <TextField
                    type="text"
                    name="servingSize"
                    id="servingSize"
                    label="Serving(s)"
                    variant="standard"
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
                    value={food.mood}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="outlined" color="error" type="submit">
                    Add Meal
                </Button>
            </form>
        </div>
    );
};

export default UpdateFood;