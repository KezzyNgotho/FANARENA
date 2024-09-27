import React, { useState } from 'react';
import StadiumCard from '../components/StadiumCard';
import CreateStadiumModal from '../components/CreateStadiumModal';
import '../index.css';

interface Stadium {
  id: number;
  name: string;
  imageUrl: string;
  seatingCapacity: number;
  amenities: string;
  design: string;
  isLeased: boolean;
  owner: string;
}

const VirtualStadiumsPage: React.FC = () => {
  const [stadiums, setStadiums] = useState<Stadium[]>([
    {
      id: 1,
      name: 'Thunder Arena',
      imageUrl: '/src/assets/stadium1.jpeg',
      seatingCapacity: 50000,
      amenities: 'VIP Boxes, Food Courts, Merchandise Shops',
      design: 'Modern',
      isLeased: false,
      owner: 'User123',
    },
    {
      id: 2,
      name: 'Eagle Stadium',
      imageUrl: '/src/assets/stadium4.jpeg',
      seatingCapacity: 35000,
      amenities: 'LED Screens, Luxury Suites',
      design: 'Classic',
      isLeased: true,
      owner: 'User456',
    },
  ]);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleCreateStadium = (newStadium: Omit<Stadium, 'id'>) => {
    setStadiums([...stadiums, { id: stadiums.length + 1, ...newStadium }]);
  };

  return (
    <div className="container">
      <h1>Virtual Stadiums</h1>
      <div className="text-center mt-6">
        <button className="button" onClick={() => setIsCreateModalOpen(true)}>
          Create New Stadium
        </button>
      </div>

      {isCreateModalOpen && (
        <CreateStadiumModal
          onClose={() => setIsCreateModalOpen(false)}
          onCreate={handleCreateStadium}
        />
      )}

      <section className="grid-section">
        <div className="grid-container">
          {stadiums.map((stadium) => (
            <StadiumCard key={stadium.id} stadium={stadium} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default VirtualStadiumsPage;
