import React from 'react';
import './Foot.css';
import About from "../Pages/About";


function Footer() {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        <h3>insert logo here</h3>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
            Team Jeff
          </section>
          <section className="footer-about_us">
            <br></br><a href="mailto:test.user@sdsu.edu">Send us an email!</a>
          </section>
        </section>
        <section className="footer-info-center">
          <section className="footer-info__terms">
            Terms and Conditions
            <br />
            &copy; 2023
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            Handcrafted in San Diego, CA by Jasmina, Syrinthia, Jeremy and Jeff

          </section>
          <section className="footer-info__contact">
            <a href="./About.js">We are software development students at San Diego State University</a>
          </section>
        </section>
        <section className='footer-social-media__icon'>
          <a href="https://www.facebook.com" class="fa fa-facebook" target='_blank'></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-linkedin"></a>
        </section>

      </section>
      <hr className="footer-seperator" />
      </section>
   
  )

}

export default Footer;