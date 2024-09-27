import React, { useState } from 'react';
import '../index.css';

interface UpgradeStadiumModalProps {
  onClose: () => void;
  onSpend: (amount: number, description: string) => void;
}

const UpgradeStadiumModal2: React.FC<UpgradeStadiumModalProps> = ({ onClose, onSpend }) => {
  const [upgradeLevel, setUpgradeLevel] = useState(1);
  const [upgradeCost, setUpgradeCost] = useState(100); // Example cost per level

  const handleUpgrade = (e: React.FormEvent) => {
    e.preventDefault();
    if (upgradeLevel > 0 && upgradeCost > 0) {
      const totalCost = upgradeLevel * upgradeCost;
      onSpend(totalCost, `Upgraded Stadium by ${upgradeLevel} levels`);
      setUpgradeLevel(1);
      setUpgradeCost(100);
      onClose();
      alert('Stadium upgraded successfully!');
    } else {
      alert('Please enter a valid upgrade level and cost.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Upgrade Stadium</h2>
        <form onSubmit={handleUpgrade}>
          <div className="form-group">
            <label>Upgrade Level</label>
            <input
              type="number"
              className="form-input"
              value={upgradeLevel}
              onChange={(e) => setUpgradeLevel(Number(e.target.value))}
              min="1"
              required
            />
          </div>
          <div className="form-group">
            <label>Cost per Level (Tokens)</label>
            <input
              type="number"
              className="form-input"
              value={upgradeCost}
              onChange={(e) => setUpgradeCost(Number(e.target.value))}
              min="1"
              required
            />
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="button">Upgrade</button>
            <button type="button" className="button back-button ml-3" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpgradeStadiumModal2;
