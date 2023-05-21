import React from 'react';
import welcome from '../assets/welcome.png'

const Home = () => {
    return (
        <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
           
        <img style= {{width: 1400, height: 1000}} src ={welcome} alt ="Home"  />
        </div>
    )
}

export default Home;