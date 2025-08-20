import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {MoveRight} from 'lucide-react';
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { BiSolidFileCss } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <div className="navbar">
        <div className="navbar-logo">
          <img src='./nav-logo-2.png' className='nav-logo-img' alt='logo'/>
        </div>
        <ul class='navbar-menu'>
          <li><a href=''>about</a></li>
          <li><a href=''>about</a></li>
          <li><a href=''>about</a></li>
          <li><a href=''>about</a></li>
        </ul>

        <ul className="nav-social-list">
          <li><a href=''>  <TbBrandGithubFilled color="white"/>github</a></li>
          <li><a href=''><FaLinkedin color="white"/> linkedIn</a></li>
        </ul>

      </div>
    </header>

    <div className='hero-section'>

      <div className="left-hero">

        <div className="badge">
          <a className="badge-btn">
          <TbBrandGithubFilled color="#f472b6"/>
          <p className="">GitHub</p>
          </a>


          <div className="badge-line"></div>

          <a className="badge-btn">
          <FaLinkedin color="#60a5fa"/>
         
          <p className="">LinkedIn</p>
          </a>
          <MoveRight />
         

        </div>


      <div className="hero-text">
        <h1 className='hero-title'>React Develper</h1>
        <p>A front-end developer who enjoys coding and learning along the way.</p>
      </div>

      <div className="hero-buttons">
      <a className='contact-me-btn'>Contact Me</a>
  
      <a className='github-btn'>GitHub</a>

      </div>

      </div>
      <img src='./hero-img.png' className="hero-img" alt='hero image'/>

    </div>

    <section>
      <div className="tech-stack-section">

        <div className="tech">
        <RiJavascriptFill color="#000000b8"size="60px"/>
          <p className='tech-name'>JavaScript</p>
          <p className='tech-text'>good level of understanding and using bla</p>
        </div>

        <div className="tech">
        <BiLogoTypescript  color="#000000b8"size="62px"/>
          <p className='tech-name'>TypeScript</p>
          <p className='tech-text'>good level of understanding and using and  knowlage</p>
        </div>

        <div className="tech">
        <BiSolidFileCss color="#000000b8"size="65px"/>
          <p className='tech-name'>CSS & HTML</p>
          <p className='tech-text'>good level of understanding and using bla</p>
        </div>

        <div className="tech">
        <FaReact color="#000000b8"size="56px"/>
          <p className='tech-name'>React</p>
          <p className='tech-text'>good level of understanding and using bla</p>
        </div>

        <div className="tech">
        <FaDatabase color="#000000b8" size="55px"/>
          <p className='tech-name'>SQL & MongoDB</p>
          <p className='tech-text'>good level of understanding and using bla</p>
        </div>


        <div className="tech">
        < BsFillGearFill  color="#000000b8" size="50px" style={{marginTop:"20px"}}/>
          <p className='tech-name' style={{marginTop:"2px"}}>Other</p>
          <p className='tech-text'>git, Tailwindcss, gsap vercel, python, google auth,stripe</p>
        </div>




      </div>
    </section>


    
      <section>

        <div className="portfolio-section">
          <h2 className="portfolio-title">My Best Projects</h2>
          <p className="portfolio-text">The main project i love the most</p>
          <div className="portfolio-cards">
            <div className="portfolio-card"></div>

            <div className="portfolio-card"></div>
            
            <div className="portfolio-card"></div>
            </div>

        </div>
      </section>
    </>
  )
}

export default App
