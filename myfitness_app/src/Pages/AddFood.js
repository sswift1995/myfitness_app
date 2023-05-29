import React, { useState } from 'react';

const AddFood = () => {
    const [foodData, setFoodData] = useState({
        name: '',
        duration: '',
        sets: '',
        reps: '',
        mood: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFoodData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    //   const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Do something with the submitted exercise data
    //     console.log(foodData);
    //   };

    return (
        <div className='Tracker'>
            <h3>Food Tracker</h3>
            <form method='POST' action='/tracker'>
                <label>
                    Name:
                    <input
                        type='text'
                        name='name'
                        id="name"
                        value={foodData.name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Serving Size:
                    <input
                        type='text'
                        id="servingSize"
                        name='servingSize'
                        value={foodData.duration}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Calories:
                    <input
                        type='text'
                        name='calories'
                        id="calories"
                        value={foodData.sets}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Time of Day:
                    <input
                        type='text'
                        name='timeOfDay'
                        id="timeOfDay"
                        value={foodData.reps}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Mood:
                    <input
                        type='text'
                        name='mood'
                        id="foodMood"
                        value={foodData.foodMood}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddFood;
