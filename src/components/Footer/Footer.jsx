import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__content">
          <p className="footer__text">
            © {currentYear} Frontend Developer. All rights reserved.
          </p>
          <p className="footer__subtext">
            Built with React & modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
