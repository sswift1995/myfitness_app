import React from 'react';
import axios from 'axios';


const ExerciseDetail = () => {

	async function exerciseData(e) {

		const options = {
			method: 'GET',
			url: 'https://exercisedb.p.rapidapi.com/exercises',
			headers: {
				'X-RapidAPI-Key': '48464c4febmsh0d1c7965060191ep11011bjsnd0dd7d1369e2',
				'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
			}
		};

		try {
			const response = await axios.request(options);
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div>
			<button onClick={(e) => exerciseData(e)}>
				Search for Exercises:
			</button>
		</div>
	)
}

export default ExerciseDetail