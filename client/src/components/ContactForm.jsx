import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setResponseMsg('Contact message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setResponseMsg('Failed to send message.');
      }
    } catch (error) {
      setResponseMsg('Error: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <input
        type="text"
        value={name}
        placeholder="Your Name"
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="email"
        value={email}
        placeholder="Your Email"
        onChange={e => setEmail(e.target.value)}
        required
      />
      <textarea
        value={message}
        placeholder="Your Message"
        onChange={e => setMessage(e.target.value)}
        required
      ></textarea>
      <button type="submit">Send</button>
      {responseMsg && <p>{responseMsg}</p>}
    </form>
  );
}

export default ContactForm;
