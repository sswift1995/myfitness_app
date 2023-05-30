import React from 'react'
import pageone from '../assets/pageone.png';


const Home = () => {


  return (
    <div style={{
      fontSize: '20px',
      textAlign: 'center',
    }}>
      Welcome to Fit by Me where wellness is designed by you.
      <br />
      <br />
      Fit by Me allows you to search for exercises and meals and track them all in one place.
      <br />
      <br />
      Get started today!
      <br />
      <br />
      <img style={{ width: 1400, height: 800 }} src={pageone} alt="Home" />
    </div>
  )
};

export default Home;