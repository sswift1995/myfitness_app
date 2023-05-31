import React from 'react';
import './Foot.css';
import logo2 from '../assets/logo2.jpg'


function Footer() {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <img src={logo2} alt='fit_by_me_logo'></img>
        </section>

        <section className="footer-info-center">
          Handcrafted in San Diego, CA by Syrinthia, Jasmina, Jeremy and Jeff; 
          Software development students at San Diego State University

        </section>
        <section className='footer-social-media__icon'>
          <a href="https://www.facebook.com" className="fa fa-facebook" target='_blank' rel='noreferrer'> </a>
          <a href="https://www.twitter.com" className="fa fa-twitter" target='_blank' rel='noreferrer'> </a>
          <a href="https://www.linkedin.com" className="fa fa-linkedin" target='_blank' rel='noreferrer'> </a>
        </section>

      </section>
      <hr className="footer-seperator" />
      <h7>&copy; 2023</h7>
    </section>

  )

}

 TrackerExercisesFood
export default Footer;


