import React, { useReducer } from 'react';
import './contact.css';

const initialState = {
  name: '',
  email: '',
  contact: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function ContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function submit(e) {
    e.preventDefault();
    // handle submission (e.g., send to API)
    console.log('Submitted', state);
    dispatch({ type: 'RESET' });
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <h2>Customer Details</h2>
      <p>Please enter your information to keep your profile up to date.</p>

      <label>
        Name
        <input
          type="text"
          value={state.name}
          onChange={(e) => dispatch({ type: 'FIELD', field: 'name', value: e.target.value })}
          placeholder="Enter your name"
          required
        />
      </label>

      <label>
        Email
        <input
          type="email"
          value={state.email}
          onChange={(e) => dispatch({ type: 'FIELD', field: 'email', value: e.target.value })}
          placeholder="Enter your email"
          required
        />
      </label>

      <label>
        Contact
        <input
          type="tel"
          value={state.contact}
          onChange={(e) => dispatch({ type: 'FIELD', field: 'contact', value: e.target.value })}
          placeholder="Enter your phone number"
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;