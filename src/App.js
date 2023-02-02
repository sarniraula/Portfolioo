import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import './index.css';

const App = () => {
  return (
    <div className='bg-backgroundColor'>
      <Navbar />
      <HeroSection />
      <Features />
    </div>
  );
}

export default App;
