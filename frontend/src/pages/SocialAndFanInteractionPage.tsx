import React, { useState } from 'react';
import FanClubCard from '../components/FanClubCard';
import CreateFanClubModal from '../components/CreateFanClubModal';
import NFTMarketplace from '../components/NFTMarketplace';
import VirtualEvents from '../components/VirtualEvents';
import '../index.css';

const SocialAndFanInteractionPage: React.FC = () => {
  const [isCreateFanClubModalOpen, setIsCreateFanClubModalOpen] = useState(false);

  const fanClubs = [
    {
      id: 1,
      imageUrl: '/src/assets/summer.jpeg',
      name: 'Eagles FC Fans',
      description: 'A community for all Eagles FC fans to discuss, share news, and participate in exclusive events.',
      members: 120,
    },
    {
      id: 2,
      name: 'Thunderbolts Basketball Club',
      description: 'Join us in cheering for the Thunderbolts and sharing exclusive content.',
      members: 95,
    },
  ];

  return (
    <div className="container">
      <h1>Social & Fan Interaction</h1>
      
      {/* Button to Create Fan Club */}
      <div className="text-center mt-6">
        <button 
          className="button" 
          onClick={() => setIsCreateFanClubModalOpen(true)}
        >
          Create Fan Club
        </button>
      </div>

      {/* Create Fan Club Modal */}
      {isCreateFanClubModalOpen && (
        <CreateFanClubModal 
          onClose={() => setIsCreateFanClubModalOpen(false)}
        />
      )}

      {/* Fan Clubs Section */}
      <section className="grid-section">
        <h2>Fan Clubs</h2>
        <div className="grid-container">
          {fanClubs.map((club) => (
            <FanClubCard key={club.id} club={club} />
          ))}
        </div>
      </section>

      {/* NFT Marketplace Section */}
      <section className="mt-10">
        <h2>NFT Marketplace</h2>
        <NFTMarketplace />
      </section>

      {/* Virtual Events Section */}
      <section className="mt-10">
        <h2>Metaverse Fan Engagement</h2>
        <VirtualEvents />
      </section>
    </div>
  );
};

export default SocialAndFanInteractionPage;
