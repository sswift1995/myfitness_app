import React from 'react'

const APIKey = `65PdE6hoHk5ve+DgrUnuBg==gnhzdVxf0nHtjRnn`
const endPoint = `https://api.api-ninjas.com/v1/exercises`
let options = {
    method: 'GET',
    headers: { 'x-api-key': APIKey }
  }

async function Exercise_data (endPoint, options) {
const data = await fetch(endPoint)
    .then((res) => res.json())
    .then((data)=> console.log(data))
}

const ExerciseDetail = () => {
    return (
        <div>
            <button onClick={(e ) =>Exercise_data(e)}>
                Search for Exercises
             </button>
        </div>
    )
}

export default ExerciseDetail