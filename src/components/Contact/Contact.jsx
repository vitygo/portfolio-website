import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './Contact.css'


// Contact form component with logic for handling submission
export default function Contact() {
  // Use state to manage the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Use toast.promise to handle the async form submission
    toast.promise(
      (async () => {
        const form = e.target;
        const data = new FormData(form);
     
        data.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
  
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: data
        });
  
        const result = await response.json();
  
        if (result.success) {
          setFormData({ name: '', email: '', message: '' }); // Clear the form
          return "Message sent successfully!"; // The value returned here is the `success` message in toast.promise
        } else {
          throw new Error(result.message || 'Failed to send message.'); // Throw an error for the `error` message
        }
      })(),
      {
        loading: 'Sending...',
        success: <b>Thank you! Your message has been sent.</b>,
        error: <b>Could not send. Please try again later.</b>,
      }
    );
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container container">
        <div className="contact__header">
          <h2 className="contact__title">
            Let's <span className="contact__title-accent">Connect</span>
          </h2>
          <p className="contact__subtitle">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <label htmlFor="name" className="contact__label">Full Name</label>
            <input
              className="contact__input"
              id="name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="contact__form-group">
            <label htmlFor="email" className="contact__label">Email Address</label>
            <input
              className="contact__input"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="contact__form-group">
            <label htmlFor="message" className="contact__label">Message</label>
            <textarea
              className="contact__textarea"
              id="message"
              name="message"
              placeholder="Tell me about your project or just say hello!"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            type="submit"
            className="contact__submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
