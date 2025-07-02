import React, { useState } from 'react';
// useNavigate hook to programmatically navigate after form submission
import { useNavigate } from 'react-router-dom';

function Contact() {
  // State to store form input values
  const [formData, setFormData] = useState({});
  // Initialize navigate function from react-router
  const navigate = useNavigate();

  // Update formData state whenever an input changes
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form data:", formData); // Log form data to console (could be sent to backend)
    navigate("/"); // Redirect to homepage after submission
  };

  return (
    <section>
      {/* Section heading */}
      <h2>Contact Me</h2>

      {/* Static contact information */}
      <p><strong>Name:</strong> Tiji Cisily Jogy</p>
      <p><strong>Email:</strong> tijijogy@gmail.com</p>

      {/* Contact form */}
      <form onSubmit={handleSubmit}>
        {/* First Name input - required */}
        <input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          required
        />
        {/* Last Name input - required */}
        <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
        {/* Contact Number input - optional */}
        <input
          name="contact"
          placeholder="Contact Number"
          onChange={handleChange}
        />
        {/* Email input - required and validated by browser */}
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        {/* Message textarea - optional */}
        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
        ></textarea>
        {/* Submit button */}
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
