import React, { useState } from 'react';
import '../scss/components/contact-form.scss';

function ContactForm() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userSubject, setUserSubject] = useState('');
  const [userMessage, setUserMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    let formData = {
      userName,
      userEmail,
      userSubject,
      userMessage
    };

    const fetchConfig = { 
      method: 'POST',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(formData)
    };

    fetch('/', fetchConfig)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Email sent');
        setUserName('');
        setUserEmail('');
        setUserSubject('');
        setUserMessage('');
      })
      .catch(error => console.error(error));
  }

  return (
    <form className="contact__form">
      <label htmlFor="name">Name</label>
      <input
        className="portfolio-input"
        id="name"
        name="name"
        onChange={e => setUserName(e.target.value)}
        placeholder="e.g. Jhon Doe"
        required
        type="text"
        value={userName}
      />

      <label htmlFor="email">Email</label>
      <input
        className="portfolio-input"
        id="email"
        name="email"
        onChange={e => setUserEmail(e.target.value)}
        placeholder="example@email.com"
        required
        type="email"
        value={userEmail}
      />

      <label htmlFor="subject">Subject</label>
      <input
        className="portfolio-input"
        id="subject"
        name="subject"
        onChange={e => setUserSubject(e.target.value)}
        required
        type="text"
        value={userSubject}
      />

      <label htmlFor="body">Message</label>
      <textarea
        className="portfolio-input"
        id="body"
        name="body"
        onChange={e => setUserMessage(e.target.value)}
        required
        rows={9}
        value={userMessage}
      ></textarea>

      <button 
        className="portfolio-btn" 
        onClick={e => handleSubmit(e)}
        type="submit"
      >
        Send message
      </button>
    </form>
  );
};

export default ContactForm;