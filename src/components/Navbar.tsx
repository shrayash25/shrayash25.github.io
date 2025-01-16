import React from 'react';
import './Navbar.css';

interface NavbarProps {
  scrollToHome: () => void;
  scrollToProjects: () => void;
  scrollToAbout: () => void;
  scrollToSkills: () => void;
  scrollToContact: () => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ 
  scrollToHome, 
  scrollToProjects, 
  scrollToAbout,   
  scrollToSkills,
  scrollToContact, 
  activeSection 
}) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
 

        <button
          className={`nav-button ${activeSection === 'home' ? 'active' : ''}`}
          onClick={scrollToHome}
        >
          Home
          <div className="nav-line"></div>
        </button>
        <button
          className={`nav-button ${activeSection === 'projects' ? 'active' : ''}`}
          onClick={scrollToProjects}
        >
          Projects
          <div className="nav-line"></div>
        </button>
        <button
          className={`nav-button ${activeSection === 'about' ? 'active' : ''}`}
          onClick={scrollToAbout}
        >
          About
          <div className="nav-line"></div>
        </button>
        <button
          className={`nav-button ${activeSection === 'skills' ? 'active' : ''}`}
          onClick={scrollToSkills}
        >
          Skills
          <div className="nav-line"></div>
        </button>
        <button
          className={`nav-button ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={scrollToContact}
        >
          Contact
          <div className="nav-line"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;