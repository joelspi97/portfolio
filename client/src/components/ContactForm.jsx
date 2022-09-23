import React, { useState } from 'react';
import '../scss/components/contact-form.scss';

function ContactForm() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userSubject, setUserSubject] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  function handleResponse(stateFunction) { // Handles loading spinner and error and success messages
    setLoading(false);
    stateFunction(true);

    setTimeout(() => {
      stateFunction(false);
    }, 10000);
  }

  function handleSubmit(e) { // Makes an API POST request to the portfolio's back end
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

    setLoading(true);
    setSuccess(false);
    setError(false);
    setErrorMsg(null);

    fetch('/', fetchConfig)
      .then(response => response.json())
      .then(data => {
        // If we have an error array, this line will only return the first element of it 
        if (Array.isArray(data) && data[0].msg.length > 0) throw new Error(data[0].msg);

        setUserName('');
        setUserEmail('');
        setUserSubject('');
        setUserMessage('');
        handleResponse(setSuccess);
      })
      .catch(error => {
        console.error(error);
        handleResponse(setError);
        setErrorMsg(String(error.message));
      });
  }

  return (
    <form className="contact-form" onSubmit={e => handleSubmit(e)}>
      <label htmlFor="name">Name</label>
      <input
        className="contact-form__input"
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
        className="contact-form__input"
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
        className="contact-form__input"
        id="subject"
        name="subject"
        onChange={e => setUserSubject(e.target.value)}
        required
        type="text"
        value={userSubject}
      />

      <label htmlFor="body">Message</label>
      <textarea
        className="contact-form__input"
        id="body"
        name="body"
        onChange={e => setUserMessage(e.target.value)}
        required
        rows={9}
        value={userMessage}
      ></textarea>

      {/* Status messages */}
      {success && <div className="contact-form__state-msg contact-form__state-msg--success" aria-live="assertive">Your message has been delivered successfully!</div>}
      {error && <div className="contact-form__state-msg contact-form__state-msg--error" aria-live="assertive"><span className="sr-only">Error: </span>{errorMsg}</div>}
      {loading && <div className="contact-form__loading-spinner" aria-live="assertive"><span className="sr-only">Loading.</span></div>}

      <button className="portfolio-btn" type="submit">Send message</button>
    </form>
  );
};

export default ContactForm;