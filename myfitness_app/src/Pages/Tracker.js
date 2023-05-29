import React from 'react';
import './Tracker.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Tracker = () => {
  return (
    <div className='Tracker'>
      <div style={{ marginBottom: '100px' }}>
        <div className='addExerciseButton'><Link to="/exercises/add">
          <Button variant="contained" color="primary">Add Exercise</Button>
        </Link>
      </div>
      </div>
      <div>
        <Link to="/food/add">
          <Button variant="contained" color="primary">Add Food</Button>
        </Link>
      </div>
    </div>
  );
};

export default Tracker;