import React, { useState } from 'react';
import '../index.css';

interface EarnTokensProps {
  onEarn: (amount: number, description: string) => void;
}

const EarnTokens: React.FC<EarnTokensProps> = ({ onEarn }) => {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');

  const handleEarn = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount > 0 && description.trim() !== '') {
      onEarn(amount, description);
      setAmount(0);
      setDescription('');
      alert('Tokens earned successfully!');
    } else {
      alert('Please enter a valid amount and description.');
    }
  };

  return (
    <div className="card">
      <h2>Earn Tokens</h2>
      <form onSubmit={handleEarn}>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            className="form-input"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            min="1"
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g., Attended Soccer Match"
            required
          />
        </div>
        <div className="text-center mt-4">
          <button type="submit" className="button">Earn Tokens</button>
        </div>
      </form>
    </div>
  );
};

export default EarnTokens;
