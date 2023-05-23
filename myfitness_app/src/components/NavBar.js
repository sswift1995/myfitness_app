import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import ExerciseDetail from '../Pages/ExerciseDetail';
import Food from '../Pages/Food';
import Tracker from '../Pages/Tracker';

const NavBar = () => (

  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'center' }} px="20px">

    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/exercises" element={<ExerciseDetail />} style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Exercises</Link>

      <Link to="/food" element={<Food />} style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Food</Link>

      <Link to="/tracker" element={<Tracker />} style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Tracker</Link>

    </Stack>
  </Stack>
);

export default NavBar;