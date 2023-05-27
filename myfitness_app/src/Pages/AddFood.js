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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the submitted exercise data
    console.log(foodData);
  };

  return (
    <div className='Tracker'>
      <h3>Food Tracker</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={foodData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Serving Size:
          <input
            type='text'
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
            value={foodData.mood}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddFood;