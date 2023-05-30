import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import logo from '../assets/logo.jpg'

const NavBar = () => (

  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'center' }} px="20px">
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      justifyContent={'center'}
      alignItems={"center"}
      fontFamily={"Alegreya"}
      fontSize={"30px"}
      padding={"5px"}
    >

      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>


      <Link to="/exercises" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625', align: 'center' }}>Exercises</Link>

      <Link to="/recipes" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625', align: 'center' }}>Food</Link>

      <Link to="/tracker" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625', align: 'center' }}>Tracker</Link>

    </Stack>
  </Stack>

);

export default NavBar;