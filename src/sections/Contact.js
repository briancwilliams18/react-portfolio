import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate name
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      isValid = false;
    } else {
      newErrors.name = '';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    // Validate message
    if (formData.message.trim() === '') {
      newErrors.message = 'Message is required';
      isValid = false;
    } else {
      newErrors.message = '';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Add your form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          {/* Name input with error message */}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <span className="error">{errors.name}</span>
          </div>

          {/* Email input with error message */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span className="error">{errors.email}</span>
          </div>

          {/* Message textarea with error message */}
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <span className="error">{errors.message}</span>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
