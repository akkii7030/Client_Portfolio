import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Services from './components/Services';
import Principles from './components/Principles';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <Hero />
      <Mission />
      <Services />
      <Principles />
      <Stats />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;