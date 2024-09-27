import React, { useState } from 'react';
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

interface UpgradeStadiumModalProps {
  stadium: Stadium;
  onClose: () => void;
}

const UpgradeStadiumModal: React.FC<UpgradeStadiumModalProps> = ({ stadium, onClose }) => {
  const [upgradeType, setUpgradeType] = useState('');

  const handleUpgrade = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement the upgrade logic here (e.g., API call)
    console.log('Upgrading Stadium:', {
      upgradeType,
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Upgrade {stadium.name}</h2>
        <form onSubmit={handleUpgrade}>
          <div className="form-group">
            <label>Select Upgrade Type</label>
            <select 
              className="form-input" 
              value={upgradeType} 
              onChange={(e) => setUpgradeType(e.target.value)} 
              required
            >
              <option value="">--Select--</option>
              <option value="Seating">Seating Capacity</option>
              <option value="Amenities">Amenities</option>
              <option value="Design">Design</option>
              <option value="Technology">Technology Enhancements</option>
            </select>
          </div>
          <div className="text-center mt-6">
            <button type="submit" className="button">Upgrade</button>
            <button 
              type="button" 
              className="button back-button ml-4" 
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpgradeStadiumModal;
