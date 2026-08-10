import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState("");

  function submit(e) {
    e.preventDefault();
    alert(name);
  }

  return (
    <form onSubmit={submit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;