import React, { useState } from 'react';
import '../index.css';

interface Tournament {
  name: string;
  sport: string;
  imageUrl: string;
  rewards: number;
}

interface CreateTournamentModalProps {
  onClose: () => void;
  onCreate: (newTournament: Tournament) => void;
}

const CreateTournamentModal: React.FC<CreateTournamentModalProps> = ({ onClose, onCreate }) => {
  const [name, setName] = useState('');
  const [sport, setSport] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [rewards, setRewards] = useState(1000);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTournament: Tournament = { name, sport, imageUrl, rewards };
    onCreate(newTournament);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create New Tournament</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Tournament Name</label>
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
            <label>Rewards (Tokens/NFTs)</label>
            <input 
              type="number" 
              className="form-input" 
              value={rewards} 
              onChange={(e) => setRewards(Number(e.target.value))} 
              min="100" 
              required 
            />
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="button">Create Tournament</button>
            <button type="button" className="button back-button ml-3" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTournamentModal;
