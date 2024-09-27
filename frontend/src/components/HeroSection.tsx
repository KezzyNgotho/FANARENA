import React from 'react';
import '../index.css';
import Button from '../components/Button'; // Ensure this path is correct
import heroImage from '../assets/hero.png'; // Import the image

type HeroSectionProps = {
  onGetStartedClick: () => void; // Correctly typed
};

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStartedClick }) => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${heroImage})`, // Use the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-content">
        <h1>Welcome To FanArena!</h1>
        <p> Join the ultimate sports metaverse where fans play, win, and collect NFTs. Engage with your favorite sports like never before!</p>
        <Button text="Play Now!" onClick={onGetStartedClick} /> 
      </div>
    </section>
  );
};

export default HeroSection;
