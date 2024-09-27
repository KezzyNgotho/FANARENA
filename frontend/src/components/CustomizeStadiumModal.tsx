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

interface CustomizeStadiumModalProps {
  stadium: Stadium;
  onClose: () => void;
}

const CustomizeStadiumModal: React.FC<CustomizeStadiumModalProps> = ({ stadium, onClose }) => {
  const [seatingCapacity, setSeatingCapacity] = useState(stadium.seatingCapacity);
  const [amenities, setAmenities] = useState(stadium.amenities);
  const [design, setDesign] = useState(stadium.design);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement the update logic here (e.g., API call)
    console.log('Customized Stadium:', {
      seatingCapacity,
      amenities,
      design,
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Customize {stadium.name}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Seating Capacity</label>
            <input 
              type="number" 
              className="form-input" 
              value={seatingCapacity} 
              onChange={(e) => setSeatingCapacity(parseInt(e.target.value))} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Amenities</label>
            <input 
              type="text" 
              className="form-input" 
              value={amenities} 
              onChange={(e) => setAmenities(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Design</label>
            <input 
              type="text" 
              className="form-input" 
              value={design} 
              onChange={(e) => setDesign(e.target.value)} 
              required 
            />
          </div>
          <div className="text-center mt-6">
            <button type="submit" className="button">Save Changes</button>
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

export default CustomizeStadiumModal;
