import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  timestamp?: string;
  liveLink?: string;
}
 
const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "BlockFund",
      description: "BlockFund is a blockchain-based crowdfunding application that enables users to create and contribute to campaigns. The app leverages smart contracts deployed on the Sepolia testnet to handle transactions securely and transparently. Users can create projects, set funding goals, and accept contributions, while all transactions are recorded on the blockchain for full accountability. The system ensures trust and security through smart contracts, enabling a decentralized crowdfunding experience.",
      technologies: ["Solidity", "Web3.js", "React", "Node.js", "Next.js"],
      timestamp:"Jan 2025",
      liveLink: ""
    },
    {
      title: "Poseidon- A Full-Stack E-Commerce Platform for Apparel Retail",
      description: "This is a full-stack e-commerce web application featuring a responsive UI for product browsing, cart management, and secure checkout. The backend handles authentication, order processing, and payment integration. User authentication is secured with JSON Web Tokens (JWT), while passwords are encrypted using bcrypt. The system efficiently manages products, orders, and user data, with payments processed via QR-based online transactions.",
      technologies:["React", "TypeScript", "Vite", "Node.js", "Express", "MongoDB", "JWT", "bcrypt"] ,
      timestamp:" June - July 2024",
      liveLink: ""
    },
    {
      title: "BrainTumorNet",
      description: "This project is a machine learning model that classifies brain tumors from MRI images into four categories: glioma, meningioma, pituitary tumor, or no tumor. Using a Convolutional Neural Network (CNN), the model is trained on labeled MRI images, with preprocessing steps like resizing and one-hot encoding. The CNN extracts features and uses a softmax activation to output tumor classifications. The system aims to assist in automated brain tumor diagnosis.",
      technologies: ["Python", "TensorFlow/Keras", "Scikit-Learn", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
      timestamp:" June - July 2024",
      liveLink: ""
    },
    
    {
      title: "CryptoZen",
      description: "CryptoZen is a cryptocurrency-based marketplace built using HTML and CSS. It features a structured and intuitive UI, showcasing how users could browse and purchase items using crypto. While this project focuses solely on the frontend without backend integration or responsiveness, it effectively demonstrates the visual design and layout of a crypto-powered marketplace.",
      technologies: ["HTML", "CSS", "JavaScript"],
      timestamp:"Aug 2024",
      liveLink: ""
    },
    
    
    // Add more projects here
  ];

  return (
    <div className="projects-content">
      <h1 >Recent Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <div className="project-links">
            {project.timestamp && (
                <p >
                   {project.timestamp}
                </p>
              )}
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={25} />
                </a>
              )}
            </div>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;