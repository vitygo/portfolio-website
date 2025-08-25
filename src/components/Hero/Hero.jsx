import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa6";
import { MoveRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__badge">
            <a 
              className="hero__badge-link" 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
            >
              <TbBrandGithubFilled color="#f472b6"/>
              <span>GitHub</span>
            </a>
            <div className="hero__badge-divider"></div>
            <a 
              className="hero__badge-link" 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
            >
              <FaLinkedin color="#60a5fa"/>
              <span>LinkedIn</span>
            </a>
            <MoveRight className="hero__badge-arrow" />
          </div>

          <div className="hero__text-content">
            <h1 className="hero__title">
              Frontend Developer
            </h1>
            <p className="hero__description">
              Passionate developer crafting beautiful and functional web experiences with modern technologies.
            </p>
          </div>

          <div className="hero__actions">
            <a 
              className="hero__btn hero__btn--primary" 
              href="#contact"
              aria-label="Contact me"
            >
              Contact Me
            </a>
            <a 
              className="hero__btn hero__btn--secondary" 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View projects on GitHub"
            >
              View Projects
            </a>
          </div>
        </div>
        
        <div className="hero__image-wrapper">
          <img 
            src='./hero-img.png' 
            className="hero__image" 
            alt='Developer illustration'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
