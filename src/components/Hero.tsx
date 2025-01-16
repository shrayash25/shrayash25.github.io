

interface HeroProps {
  homeRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ homeRef, projectsRef, aboutRef, contactRef }) => {
  return (
    <div className="hero">
 
      <div ref={homeRef} className="section home">
        <h2></h2>

      </div>
      <div ref={projectsRef} className="section projects">


      </div>
      <div ref={aboutRef} className="section about">


      </div>
      <div ref={contactRef} className="section contact">


      </div>
    </div>
  );
};

export default Hero;
