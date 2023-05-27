import React from 'react'
import './Tracker.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Tracker = () => {
  return (
    <div className='Tracker'>
      <div>
        <Link to="/exercises/add">
          <Button>Add Exercise</Button>
        </Link>
      </div>
      <div>
        <Link to="/food/add">
          <Button>Add Food</Button>
        </Link>
      </div>
    </div>
  )

}

export default Tracker