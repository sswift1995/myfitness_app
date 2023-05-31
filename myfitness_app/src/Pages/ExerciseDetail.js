import React, { useState } from 'react';
import axios from 'axios';
import { Button, Grid, Box } from '@mui/material';
import exercise from '../assets/exercise.png';


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
		<div style={{
			fontSize: '20px',
			textAlign: 'center',
		  }}>
			Ready to begin your journey? Let’s break a sweat! Hundreds of exercises are just a click away!
			<br/>
			<br/>
			⭐ Don't forget to add your workout to the tracker ⭐
		<Box display="flex" flexDirection="column" alignItems="center" style={{ padding: '20px' }}>
			<Button variant="outlined" color="error" onClick={exerciseData}>
				Search for Exercises
			</Button>
			<img style={{ width: 1000, height: 600, padding: '20px' }} src={exercise} alt="Home" />

			{/* Render the fetched exercise data */}
			<Box mt={2} display="flex" justifyContent="center">
				<Box maxWidth='2000px' width='100%'>
					<Grid container spacing={2}>
						{exercises.map((exercise) => (
							<Grid item xs={12} sm={6} md={4} key={exercise.id}>
								<div>
									<h1>{exercise.name}</h1>
									<img src={exercise.gifUrl} alt={exercise.name} />
									<p>{exercise.target}</p>
									<p>{exercise.equipment}</p>
								</div>
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
			
		</Box>
		</div>
	);
};

export default ExerciseDetail;