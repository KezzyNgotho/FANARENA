import React, { useState } from 'react';
import '../index.css';

interface PlaceBetModalProps {
  onClose: () => void;
  onSpend: (amount: number, description: string) => void;
}

const PlaceBetModal: React.FC<PlaceBetModalProps> = ({ onClose, onSpend }) => {
  const [betAmount, setBetAmount] = useState(0);
  const [betDescription, setBetDescription] = useState('');

  const handlePlaceBet = (e: React.FormEvent) => {
    e.preventDefault();
    if (betAmount > 0 && betDescription.trim() !== '') {
      onSpend(betAmount, `Placed Bet: ${betDescription}`);
      setBetAmount(0);
      setBetDescription('');
      onClose();
      alert('Bet placed successfully!');
    } else {
      alert('Please enter a valid bet amount and description.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Place Bet</h2>
        <form onSubmit={handlePlaceBet}>
          <div className="form-group">
            <label>Bet Description</label>
            <input
              type="text"
              className="form-input"
              value={betDescription}
              onChange={(e) => setBetDescription(e.target.value)}
              placeholder="e.g., Bet on Eagles FC win"
              required
            />
          </div>
          <div className="form-group">
            <label>Bet Amount (Tokens)</label>
            <input
              type="number"
              className="form-input"
              value={betAmount}
              onChange={(e) => setBetAmount(Number(e.target.value))}
              min="1"
              required
            />
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="button">Place Bet</button>
            <button type="button" className="button back-button ml-3" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaceBetModal;
