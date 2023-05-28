import React, { useState } from 'react';

const AddFood = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        const data = {
            name: formData.get('name'),
            servingSize: formData.get('servingSize'),
            calories: formData.get('calories'),
            timeOfDay: formData.get('timeOfDay'),
            mood: formData.get('mood')
        };

        fetch('http://localhost:3000/food/add', {
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
            <h3>Add New Recipe</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type='text'
                        name='name'
                        id="name"
                        required
                    />
                </label>
                <br />
                <label>
                    Serving Size:
                    <input
                        type='text'
                        id="servingSize"
                        name='servingSize'
                        required
                    />
                </label>
                <br />
                <label>
                    Calories:
                    <input
                        type='text'
                        name='calories'
                        id="calories"
                    />
                </label>
                <br />
                <label>
                    Time of Day:
                    <input
                        type='text'
                        name='timeOfDay'
                        id="timeOfDay"
                    />
                </label>
                <br />
                <label>
                    Mood:
                    <input
                        type='text'
                        name='mood'
                        id="foodMood"
                    />
                </label>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddFood;
