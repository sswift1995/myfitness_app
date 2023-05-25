import React from 'react';
import './Foot.css';
import logo2 from '../assets/logo2.jpg'
import About from "../Pages/About";

// test comment
function Footer() {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <img src={logo2} alt='fit_by_me_logo'></img>
          <section className="footer-about_us">
          </section>
        </section>
        <section className="footer-info-center">
          <bold>TECHNOLOGIES USED:</bold>
          <ul>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>API's</li>
            <li>React</li>
            <li>HTML</li>
          </ul>
        </section>
        <section className="footer-info-right">
          Handcrafted in San Diego, CA by Jasmina, Syrinthia, Jeremy and Jeff

          <section className="footer-info__contact">
            <a href="/About">We are software development students at San Diego State University</a>
          </section>
        </section>
        <section className='footer-social-media__icon'>
          <a href="https://www.facebook.com" class="fa fa-facebook" target='_blank'></a>
          <a href="https://www.twitter.com" class="fa fa-twitter" target='_blank'></a>
          <a href="https://www.linkedin.com" class="fa fa-linkedin" target='_blank'></a>
        </section>

      </section>
      <hr className="footer-seperator" />
      &copy; 2023
    </section>

  )

}

export default Footer;
