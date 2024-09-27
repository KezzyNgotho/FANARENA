import React from 'react';
import HeroSection from '../components/HeroSection';
import GridSection from '../components/GridSection';
import '../index.css';

const LandingPage: React.FC = () => {
  const handleGetStartedClick = () => {
    window.location.href = '/login'; 
  };

  
  const gridItems = [
    {
      title: 'Play And Win !',
      description: 'Don’t miss the epic showdown!Compete in sports challenges, place bets, and win exclusive NFTs as rewards for your skills and luck.',
      imageUrl: '/src/assets/stadium6.jpeg', 
    },
    {
      title: 'Collect NFTs!',
      description: 'Exclusive player NFTs available now!Build your collection of rare sports-themed NFTs, trade them, and unlock special features within the FanArena metaverse',
      imageUrl: '/src/assets/player1.jpeg', 
    },
    {
      title: 'Connect with Fans!',
      description: 'See how fans are winning in the metaverse and Join a community of passionate sports fans, engage in live events, and participate in global competitions.!',
      imageUrl: '/src/assets/duo1.jpeg', 
    },
    
  ];

  return (
    <div>
      <HeroSection onGetStartedClick={handleGetStartedClick} />
      <GridSection items={gridItems} />
    </div>
  );
};

export default LandingPage;
