import React, { useState } from 'react';
import '../index.css';

// Define the interface for CreateTeamModalProps
interface CreateTeamModalProps {
  onClose: () => void;
  onCreate: (newTeam: Omit<Team, 'players' | 'performance'>) => void; // newTeam type
}

// Define the interface for the Team object
interface Team {
  name: string;
  sport: string;
  imageUrl: string;
  nftId: string;
  performance: number;
  players: any[]; // Adjust this if you have a Player type
}

const CreateTeamModal: React.FC<CreateTeamModalProps> = ({ onClose, onCreate }) => {
  const [name, setName] = useState('');
  const [sport, setSport] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [nftId, setNftId] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTeam = { name, sport, imageUrl, nftId, performance: 0, players: [] };
    onCreate(newTeam);  // Pass the new team to onCreate
    onClose(); // Close the modal
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create New Team</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Team Name</label>
            <input 
              type="text" 
              className="form-input" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Sport</label>
            <input 
              type="text" 
              className="form-input" 
              value={sport} 
              onChange={(e) => setSport(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input 
              type="url" 
              className="form-input" 
              value={imageUrl} 
              onChange={(e) => setImageUrl(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>NFT ID</label>
            <input 
              type="text" 
              className="form-input" 
              value={nftId} 
              onChange={(e) => setNftId(e.target.value)} 
              required 
            />
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="button">Create Team</button>
            <button type="button" className="button back-button ml-3" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTeamModal;
