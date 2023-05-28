import React from 'react'
import './Tracker.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const Tracker = () => {

  // let foodFormatted = food.map((food) => {
  //   return (
  //     <div>
  //       <h2>{food.name}</h2>
  //     </div>
  //   )
  // })

  return (
    <div className='Tracker'>
      <div>
        <Link to="/exercises/add">
          <Button variant="outlined" color="error">Add Exercise</Button>
        </Link>
      </div>
      <div>
        <Link to="/foods/add">
          <Button variant="outlined" color="error">Add Food</Button>
        </Link>
      </div>
      <div>
        <h1>Food</h1>
        <div>

        </div>
      </div>
    </div>
  )

}

export default Tracker