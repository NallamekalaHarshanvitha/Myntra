import React, { useState } from 'react';
import './contact.css';

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  function submit(e) {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nContact: ${contact}`);
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <h2>Customer Details</h2>
      <p>Please enter your information to keep your profile up to date.</p>

      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
      </label>

      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </label>

      <label>
        Contact
        <input
          type="tel"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Enter your phone number"
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;