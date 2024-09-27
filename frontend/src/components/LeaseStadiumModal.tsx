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

interface LeaseStadiumModalProps {
  stadium: Stadium;
  onClose: () => void;
}

const LeaseStadiumModal: React.FC<LeaseStadiumModalProps> = ({ stadium, onClose }) => {
  const [leaseDuration, setLeaseDuration] = useState('');
  const [leasePrice, setLeasePrice] = useState('');

  const handleLease = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement the leasing logic here (e.g., API call)
    console.log('Leasing Stadium:', {
      leaseDuration,
      leasePrice,
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Lease {stadium.name}</h2>
        <form onSubmit={handleLease}>
          <div className="form-group">
            <label>Lease Duration (Months)</label>
            <input 
              type="number" 
              className="form-input" 
              value={leaseDuration} 
              onChange={(e) => setLeaseDuration(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Lease Price (Token)</label>
            <input 
              type="number" 
              className="form-input" 
              value={leasePrice} 
              onChange={(e) => setLeasePrice(e.target.value)} 
              required 
            />
          </div>
          <div className="text-center mt-6">
            <button type="submit" className="button">Lease Stadium</button>
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

export default LeaseStadiumModal;
