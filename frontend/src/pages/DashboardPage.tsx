import React from 'react';
import GridSection from '../components/GridSection';
import '../index.css';

const DashboardPage: React.FC = () => {
  const gridItems = [
    {
      title: 'Virtual Stadiums',
      description: 'Own, customize, and manage your virtual stadiums as NFTs. Lease them or host events to monetize your assets.',
      imageUrl: '/src/assets/stadium.jpeg', 
      link: '/virtual-stadiums' // Add link
    },
    {
      title: 'Team Management',
      description: 'Create and manage your sports teams. Trade NFTs, improve team performance, and compete in various leagues.',
      imageUrl: '/src/assets/team2.jpeg',
      link: '/team-management' // Add link
    },
    {
      title: 'Gamified Sports Events',
      description: 'Participate in virtual leagues and tournaments. Compete, spectate, and influence outcomes with real-world data integration.',
      imageUrl: '/src/assets/gamified.jpeg',
      link: '/gamified-events' // Add link
    },
    {
      title: 'In-Game Economy',
      description: 'Engage in a tokenized economy. Earn, spend, and trade tokens to upgrade stadiums, acquire exclusive NFTs, and access premium events.',
      imageUrl: '/src/assets/economy1.jpeg',
      link: '/in-game-economy' // Add link
    },
    {
      title: 'Social & Fan Interaction',
      description: 'Build fan clubs, trade NFT memorabilia, and engage in metaverse activities like virtual meet-and-greets and tailgate parties.',
      imageUrl: '/src/assets/duo2.jpeg',
      link: '/social-interaction' // Add link
    },
    {
      title: 'Cross-Sport & Multi-League Support',
      description: 'Support multiple sports and integrate e-sports leagues. Collaborate and compete in hybrid events for a unified experience.',
      imageUrl: '/src/assets/cross2.jpeg',
      link: '/cross-sport' // Add link
    },
    {
      title: 'Create New Event',
      description: 'Organize and manage your own fantasy sports events with ease.',
      imageUrl: '/src/assets/event1.jpeg',
      link: '/create-event' // Add link
    },
    {
      title: 'My NFT Collection',
      description: 'View and manage your exclusive FanArena NFTs, including stadiums, teams, and player cards.',
      imageUrl: '/src/assets/player3.jpeg',
      link: '/nft-collection' // Add link
    },
  ];
  

  return (
    <div className="container">
      <h1>FanArena Dashboard</h1>

      <GridSection items={gridItems} />

      
    </div>
  );
};

export default DashboardPage;
