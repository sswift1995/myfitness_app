import React, { useState } from 'react';
import axios from 'axios';

const ExerciseDetail = () => {

	const [exercises, setExercises] = useState([]);

	async function exerciseData(e) {
		e.preventDefault();

		const url = 'https://exercisedb.p.rapidapi.com/exercises';

		const options = {
			headers: {
				'X-RapidAPI-Key': '48464c4febmsh0d1c7965060191ep11011bjsnd0dd7d1369e2',
				'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
			},
		};

		try {
			const response = await axios.get(url, options);
			const data = response.data;
			console.log(data);
			setExercises(data); // Update the state with the received data
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div>
			<button onClick={exerciseData}>Search for Exercises</button>
			{/* Render the fetched exercise data */}
			<ul>
				{exercises.map((exercise) => (
					<li key={exercise.id}>{exercise.name}</li>
				))}
			</ul>
		</div>
	);
};
export default ExerciseDetail;