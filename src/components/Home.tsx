import React from "react";
import {Github, LinkedinIcon } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="home-content">
      <div className="emsp"></div>
      <div className="bigbox">
        <div className="hero-box1"> 
          <li>
            <ul>
              <h1 className="ltext">Think</h1>
            </ul>
            <ul>
              <h1 className="ltext">Code</h1>
            </ul>
            <ul>
              <h1 className="ltext">Build</h1>
            </ul>
            <ul>
              <h1 className="ltext">Inspire</h1>
            </ul>
          </li>
        </div>
        <div className="hero-box2">
          <div className="card">
            
            <div className="bg">
             <div className="tb">
              <h2>Hi, I'm Shrayash, an Electrical and Electronics Engineering undergrad at BITS Pilani. Passionate about problem-solving and building impactful solutions to make a difference.</h2>
              <div className="quickc">
                <Github size={30} color="black" />
                <LinkedinIcon size={30} color="black"/>
                </div>
              
             </div>
              </div>
            <div className="blob"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
