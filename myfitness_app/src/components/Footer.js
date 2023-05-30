import React from 'react';
import './Foot.css';
import logo2 from '../assets/logo2.jpg'


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
            <h4>We are software development students at San Diego State University</h4>
          </section>
        </section>
        <section className='footer-social-media__icon'>
          <a href="https://www.facebook.com" className="fa fa-facebook" target='_blank' rel='noreferrer'> </a>
          <a href="https://www.twitter.com" className="fa fa-twitter" target='_blank' rel='noreferrer'> </a>
          <a href="https://www.linkedin.com" className="fa fa-linkedin" target='_blank' rel='noreferrer'> </a>
        </section>

      </section>
      <hr className="footer-seperator" />
      &copy; 2023
    </section>

  )

}

export default Footer;