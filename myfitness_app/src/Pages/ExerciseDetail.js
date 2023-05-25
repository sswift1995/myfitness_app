import React from 'react'

const url = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '48464c4febmsh0d1c7965060191ep11011bjsnd0dd7d1369e2',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
const ExerciseDetail = () => {
    return (
        <div>
            <button onClick={(e ) =>ExerciseDetail(e)}>
                Search for Exercises:
             </button>
        </div>
    )
}

export default ExerciseDetail