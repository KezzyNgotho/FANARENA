import React, { useState } from 'react';
import '../index.css';

interface CreateStadiumModalProps {
  onClose: () => void;
  onCreate: (stadium: any) => void;
}

const CreateStadiumModal: React.FC<CreateStadiumModalProps> = ({ onClose, onCreate }) => {
  const [name, setName] = useState('');
  const [seatingCapacity, setSeatingCapacity] = useState('');
  const [amenities, setAmenities] = useState('');
  const [design, setDesign] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newStadium = {
      name,
      seatingCapacity: parseInt(seatingCapacity),
      amenities,
      design,
      imageUrl: imageUrl || '/src/assets/default-stadium.jpeg', // Default image if none provided
      isLeased: false,
      owner: 'CurrentUser', // Replace with actual user data
    };
    onCreate(newStadium);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create New Stadium</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Stadium Name</label>
            <input 
              type="text" 
              className="form-input" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Seating Capacity</label>
            <input 
              type="number" 
              className="form-input" 
              value={seatingCapacity} 
              onChange={(e) => setSeatingCapacity(e.target.value)} 
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
              placeholder="e.g., VIP Boxes, Food Courts"
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
              placeholder="e.g., Modern, Classic"
              required 
            />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input 
              type="text" 
              className="form-input" 
              value={imageUrl} 
              onChange={(e) => setImageUrl(e.target.value)} 
              placeholder="Optional"
            />
          </div>
          <div className="text-center mt-6">
            <button type="submit" className="button">Create</button>
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

export default CreateStadiumModal;
