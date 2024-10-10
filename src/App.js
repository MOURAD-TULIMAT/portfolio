// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isContactInView, setIsContactInView] = useState(false);

  const handleContactInViewChange = (inView) => {
    setIsContactInView(inView);
  };

  return (
    <>
      <Header />
      <main>
        <About />
        <WorkExperience />
        <Education />
        <Skills />
        <Projects />
        <Contact onInViewChange={handleContactInViewChange} />
      </main>
      <Footer isVisible={!isContactInView} />
    </>
  );
}

export default App;
