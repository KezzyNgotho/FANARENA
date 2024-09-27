import React, { useState } from 'react';
import '../index.css';

interface AccessPremiumEventModalProps {
  onClose: () => void;
  onSpend: (amount: number, description: string) => void;
}

const AccessPremiumEventModal: React.FC<AccessPremiumEventModalProps> = ({ onClose, onSpend }) => {
  const [eventName, setEventName] = useState('');
  const [eventCost, setEventCost] = useState(0);

  const handleAccessEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (eventCost > 0 && eventName.trim() !== '') {
      onSpend(eventCost, `Accessed Premium Event: ${eventName}`);
      setEventName('');
      setEventCost(0);
      onClose();
      alert('Accessed premium event successfully!');
    } else {
      alert('Please enter a valid event name and cost.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Access Premium Event</h2>
        <form onSubmit={handleAccessEvent}>
          <div className="form-group">
            <label>Event Name</label>
            <input
              type="text"
              className="form-input"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="e.g., VIP Match Viewing"
              required
            />
          </div>
          <div className="form-group">
            <label>Cost (Tokens)</label>
            <input
              type="number"
              className="form-input"
              value={eventCost}
              onChange={(e) => setEventCost(Number(e.target.value))}
              min="1"
              required
            />
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="button">Access Event</button>
            <button type="button" className="button back-button ml-3" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccessPremiumEventModal;
