import React from 'react';
import AnimatedDiv from './AnimatedDiv';
import '../scss/components/contact.scss';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section-decoration"></div>
      <div className="section-decoration section-decoration--left"></div>
      <div className="section-decoration section-decoration--right"></div>
        <AnimatedDiv>
          <h1 className="section-heading">Get in touch!</h1>
        </AnimatedDiv>
        <AnimatedDiv elementClassName="contact__form-wrapper">
          <ContactForm />
        </AnimatedDiv>
        <AnimatedDiv elementClassName="contact__links-container">
            <a 
              href="https://www.linkedin.com/in/joel-spinelli-497a1418b/" 
              title="Visit my LinkedIn profile" 
              target="_blank"
              rel="noreferrer" 
              aria-label="Visit my LinkedIn profile."
              className="focusable"
            >
              <span className="linkedin-icon"></span>
              LinkedIn
            </a>
            <a 
              href="https://github.com/joelspi97" 
              title="Visit my Github profile" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Visit my GitHub profile."
              className="focusable"
            >
              <span className="github-icon"></span>
              GitHub
            </a>
            <a 
              href="mailto:joelspi97@gmail.com" 
              title="Send me an email" 
              rel="noreferrer"
              className="focusable"
            >
                <span className="mail-icon"></span>
                Send me an email!
            </a>
        </AnimatedDiv>
    </section>
  );
}

export default Contact;
