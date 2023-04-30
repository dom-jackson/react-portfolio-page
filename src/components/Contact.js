import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [submitMsg, setSubmitMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    let hasErrors = false;
    if (!formData.name) {
      errors.name = true;
      hasErrors = true;
    }
    if (!formData.email) {
      errors.email = true;
      hasErrors = true;
    } else if (!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(formData.email)) {
      errors.email = true;
      hasErrors = true;
    }
    if (!formData.message) {
      errors.message = true;
      hasErrors = true;
    }
    if (hasErrors) {
      setFormErrors(errors);
      setSubmitMsg('');
    } else {
      setFormErrors({
        name: false,
        email: false,
        message: false,
      });
      setSubmitMsg('Your message has been sent!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: true,
      });
    } else {
      setFormErrors({
        ...formErrors,
        [e.target.name]: false,
      });
    }
  };

  return (
    <section className="content">
      <h2>Contact Me</h2>
      <form className="contact" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {formErrors.name && <p className="error">Name is required</p>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {formErrors.email && (
          <p className="error">Please enter a valid email address</p>
        )}
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
        ></textarea>
        {formErrors.message && <p className="error">Message is required</p>}
        <button type="submit">Submit</button>
      </form>
      <p>{submitMsg}</p>
    </section>
  );
};

export default Contact;
