import React from 'react';
import { Link } from 'react-router-dom';

// TODO:
// import { Stack } from '@mui/material';
import dumbell from '../assets/dumbell.jpeg'

const NavBar = () => {
    return (
        <div>
            <Link to="/">
                <img src={dumbell} alt="dumbell" style={{
                    width: '48px', height: '48px', margin:
                        '0 20px'
                }}
                />
            </Link>
            <div>
                <Link to='/' style={{ textDecoration: "none", color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
                <a href='#exercises' style={
                    {
                        textDecoration: 'none', color:
                            '#3A1212'
                    }}>Exercises</a>
            </div>
        </div>
    )
}

export default NavBar;