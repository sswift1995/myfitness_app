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
			setExercises(data); // Update the state with the received data
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '10vh',
				marginBottom: '10vh',
			}}
		>
			<button
				style={{
					backgroundColor: '#4285f4',
					color: '#fff',
					padding: '10px 20px',
					fontSize: '16px',
					border: 'none',
					borderRadius: '4px',
					cursor: 'pointer'
				}}
				onClick={(e) => exerciseData(e)}
			>
				Search for Exercises
			</button>
			<div>
				{exercises.map((exercise) => (
					<div>
						<h1>{exercise.name}</h1>
						<img src={exercise.gifUrl} alt={exercise.name} />
						<p>{exercise.target}</p>
						<p>{exercise.equipment}</p>
						<button>Save</button>
					</div>
				))}
			</div>
		</div>
	);
};
export default ExerciseDetail;