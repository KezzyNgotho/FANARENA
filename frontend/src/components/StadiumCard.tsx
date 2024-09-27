import React, { useState } from 'react';
import CustomizeStadiumModal from '../components/CustomizeStadiumModal';
import LeaseStadiumModal from '../components/LeaseStadiumModal';
import UpgradeStadiumModal from '../components/UpgradeStadiumModal';
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

interface StadiumCardProps {
  stadium: Stadium;
}

const StadiumCard: React.FC<StadiumCardProps> = ({ stadium }) => {
  const [isCustomizeModalOpen, setIsCustomizeModalOpen] = useState(false);
  const [isLeaseModalOpen, setIsLeaseModalOpen] = useState(false);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  return (
    <div className="grid-item">
      <img src={stadium.imageUrl} alt={stadium.name} className="grid-image" />
      <h3>{stadium.name}</h3>
      <p><strong>Seating Capacity:</strong> {stadium.seatingCapacity}</p>
      <p><strong>Amenities:</strong> {stadium.amenities}</p>
      <p><strong>Design:</strong> {stadium.design}</p>
      <p><strong>Status:</strong> {stadium.isLeased ? 'Leased' : 'Available'}</p>
      <div className="mt-6">
        <button 
          className="button mr-2" 
          onClick={() => setIsCustomizeModalOpen(true)}
        >
          Customize
        </button>
        <button 
          className="button mr-2" 
          onClick={() => setIsLeaseModalOpen(true)}
        >
          {stadium.isLeased ? 'Manage Lease' : 'Lease'}
        </button>
        <button 
          className="button mr-2" 
          onClick={() => setIsUpgradeModalOpen(true)}
        >
          Upgrade
        </button>
        {/* Add more action buttons as needed */}
      </div>

      {/* Customize Stadium Modal */}
      {isCustomizeModalOpen && (
        <CustomizeStadiumModal 
          stadium={stadium} 
          onClose={() => setIsCustomizeModalOpen(false)} 
        />
      )}

      {/* Lease Stadium Modal */}
      {isLeaseModalOpen && (
        <LeaseStadiumModal 
          stadium={stadium} 
          onClose={() => setIsLeaseModalOpen(false)} 
        />
      )}

      {/* Upgrade Stadium Modal */}
      {isUpgradeModalOpen && (
        <UpgradeStadiumModal 
          stadium={stadium} 
          onClose={() => setIsUpgradeModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default StadiumCard;
