import React, { useState } from 'react';

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any action with the form data, e.g., send it to a server
    console.log('Form submitted:', formData);
    // You can add additional logic here, such as sending data to a server using fetch or axios
  };

  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>
  

        <form onSubmit={handleSubmit}>
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
            <label>Message</label>
            <textarea
              name='message'
              value={formData.message}
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
