// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'; // Import global styles
import ChatDemo from './components/ChatDemo';
import Features from './components/Features';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <HeroSection />
        <Features />
        <ChatDemo />
      </div>
      <Footer />
    </>
  );
};

export default App;
