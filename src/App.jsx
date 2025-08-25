import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import TechStack from './components/TechStack/TechStack';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <TechStack />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;


