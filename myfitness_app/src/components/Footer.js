import React from 'react';


function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        <a href="/" target="_blank" rel="noopener noreferrer">fitbyme.com</a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
             Team Jeff
          </section>
          <section className="footer-about_us">
            <a href="">We are software development students at San Diego State University</a>
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
            <a href="mailto:test.user@sdsu.edu">Send us an email!</a>
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;