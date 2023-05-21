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
            About Us
 
          </section>        
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            shop.info@gmail.com
          </section>
          <section className="footer-info__terms">
            Terms and Conditions
            <br />
            Copyright
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            99999999999
          </section>
          <section className="footer-info__contact">
            My Story
            <br />
            Contact Us
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;