import React from 'react';
import '../index.css';

interface Tournament {
  id: number;
  name: string;
  sport: string;
  imageUrl: string;
  participants: string[];
  status: string;
  rewards: number;
}

interface ParticipateTournamentModalProps {
  event: Tournament;
  onClose: () => void;
  onParticipate: (tournamentId: number, user: string) => void;
}

const ParticipateTournamentModal: React.FC<ParticipateTournamentModalProps> = ({ event, onClose, onParticipate }) => {
  const currentUser = 'CurrentUser'; // Replace with actual user data

  const handleParticipate = () => {
    onParticipate(event.id, currentUser);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Participate in {event.name}</h2>
        <p><strong>Sport:</strong> {event.sport}</p>
        <p><strong>Rewards:</strong> {event.rewards} Tokens/NFTs</p>
        <p><strong>Status:</strong> {event.status}</p>
        <p>Are you sure you want to participate in this tournament?</p>
        <div className="text-center mt-4">
          <button className="button" onClick={handleParticipate}>Yes, Participate</button>
          <button className="button back-button ml-3" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ParticipateTournamentModal;
