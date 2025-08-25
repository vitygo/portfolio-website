import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar container">
        <div className="navbar__logo">
          <img src='./nav-logo-2.png' className='navbar__logo-img' alt='Portfolio Logo'/>
        </div>
        
        <ul className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
          <li><a href='#home' onClick={closeMenu}>Home</a></li>
          <li><a href='#about' onClick={closeMenu}>About</a></li>
          <li><a href='#projects' onClick={closeMenu}>Projects</a></li>
          <li><a href='#contact' onClick={closeMenu}>Contact</a></li>
        </ul>

        <ul className="navbar__social">
          <li>
            <a 
              href='https://github.com' 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
            >
              <TbBrandGithubFilled color="white"/>
              <span className="navbar__social-text">GitHub</span>
            </a>
          </li>
          <li>
            <a 
              href='https://linkedin.com' 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
            >
              <FaLinkedin color="white"/>
              <span className="navbar__social-text">LinkedIn</span>
            </a>
          </li>
        </ul>

        <button 
          className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
