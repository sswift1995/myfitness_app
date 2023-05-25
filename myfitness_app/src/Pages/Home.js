import React from 'react'
import pageone from '../assets/pageone.png';


const Home = () => {
    const divStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    };
 
    return (
        
      <div style={divStyle}>
        
        <img style={{ width: 1400, height: 800 }} src={pageone} alt="Home" />
      </div>
    );
  };
 
  export default Home;