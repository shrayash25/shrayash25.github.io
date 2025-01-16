import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="contact-content">
      <h1>Get In Touch</h1>
      <h3>I'm always open to new opportunities and interesting projects.</h3>
      
      <div className="contact-methods">
        <a href="mailto:your.email@example.com" className="contactit">
          <Mail size={30} />
          <p>shrayash25.works@gmail.com</p>
        </a>
        <a href="https://in.linkedin.com/in/shrayash-barnwal-aab29128a" target="#" className="contactit">
          <Linkedin size={30} />
          <p>LinkedIn Profile</p>
        </a>
        <a href="https://github.com/shrayash25/" target="#" className="contactit">
          <Github size={30} />
          <p>GitHub Profile</p>
        </a>
      </div>
    </div>
  ); 
};

export default Contact;