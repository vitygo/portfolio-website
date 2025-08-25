import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically handle form submission
    alert('Thank you for your message! I will get back to you soon.');
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
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="contact__form-group">
            <label htmlFor="email" className="contact__label">Email Address</label>
            <input 
              className="contact__input" 
              id="email" 
              type="email" 
              placeholder="Enter your email address"
              required
            />
          </div>
          
          <div className="contact__form-group">
            <label htmlFor="message" className="contact__label">Message</label>
            <textarea 
              className="contact__textarea" 
              id="message" 
              placeholder="Tell me about your project or just say hello!"
              rows="5"
              required
            />
          </div>
          
          <button type="submit" className="contact__submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
