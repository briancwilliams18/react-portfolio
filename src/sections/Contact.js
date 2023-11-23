import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate fields on change
    if (value.trim() === '' && name !== 'message') {
      setFormErrors({
        ...formErrors,
        [name]: 'This field is required.',
      });
    } else if (name === 'email' && !isValidEmail(value)) {
      setFormErrors({
        ...formErrors,
        email: 'Please enter a valid email address.',
      });
    } else {
      setFormErrors({
        ...formErrors,
        [name]: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission logic 
    // Check if there are no errors before submitting
    if (Object.values(formErrors).every((error) => error === '')) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData);
    } else {
      // Form has errors, display an error message
      console.log('Form has errors. Please correct them before submitting.');
    }
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
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
            <p className="error-message">{formErrors.name}</p>
          </div>
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
            <p className="error-message">{formErrors.email}</p>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

