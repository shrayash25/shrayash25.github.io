import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { LoaderProvider } from './components/LoaderContext'; // Import LoaderProvider
import Loader from './components/Loader'; // Import the Loader component
import { useLoader } from './components/LoaderContext'; // Import useLoader hook

// Import the individual section components
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

const AppContent: React.FC = () => {
  const { loading } = useLoader();

  // Create refs for different sections
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Track the active section
  const [activeSection, setActiveSection] = useState<string>('home');

  // Scroll functions
  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection('home');
  };
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection('projects');
  };
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection('about');
  };
  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection('skills');
  };
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection('contact');
  };

  // Track which section is currently visible when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', ref: homeRef }, 
        { id: 'projects', ref: projectsRef },
        { id: 'about', ref: aboutRef },
        { id: 'skills', ref: skillsRef },
        { id: 'contact', ref: contactRef },
      ];

      for (const section of sections) {
        const rect = section.ref.current?.getBoundingClientRect();
        if (rect && rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="app-container">
        <Navbar 
          scrollToHome={scrollToHome}
          scrollToProjects={scrollToProjects}
          scrollToAbout={scrollToAbout}
          scrollToSkills={scrollToSkills}
          scrollToContact={scrollToContact}
          activeSection={activeSection}
        />
        <div className="content">
          <Routes>
            <Route path="/" element={
              <>
                <div ref={homeRef}><Home /></div>
                <div ref={projectsRef}><Projects /></div>
                <div ref={aboutRef}><About /></div>
                <div ref={skillsRef}><Skills /></div>
                <div ref={contactRef}><Contact /></div>
              </>
            } />
          </Routes>
        </div>
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <LoaderProvider>
      <Router>
        <div className="App gcontainer">
          <AppContent />
        </div>
      </Router>
    </LoaderProvider>
  );
};

export default App;
