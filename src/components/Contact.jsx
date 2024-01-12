import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    alert("Form submitted!!");

    <Route path="/contact" element={<Contact />} />
    
  };

  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>
  

        <form action="https://formsubmit.co/nickillustrator5@gmail.com" method="POST" onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              placeholder='Abc'
            />
            <input type="hidden" name="_subject" value="New mail has found !"></input>
          </div>

          <div>
            <label>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='Abc@xyz.com'
            />
          </div>

          <div>
            <label>Phone</label>
            <input
              type='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder='+91'
            />
          </div>

          <div>
            <label>Query</label>
            <textarea
              name='query'
              value={formData.query}
              onChange={handleChange}
              required
              placeholder='Tell us about your query...'
            />
          </div>

          <button type='submit'>Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
