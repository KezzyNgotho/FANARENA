import React, { useState } from 'react';
import ParticipateTournamentModal from '../components/ParticipateTournamentModal';
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

interface EventCardProps {
  event: Tournament;
  onParticipate: (tournamentId: number, user: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onParticipate }) => {
  const [isParticipateModalOpen, setIsParticipateModalOpen] = useState(false);

  const currentUser = 'CurrentUser'; // Replace with actual user data

  const handleParticipate = (tournamentId: number, user: string) => {
    onParticipate(tournamentId, user);
    setIsParticipateModalOpen(false);
  };

  return (
    <div className="grid-item">
      <img src={event.imageUrl} alt={event.name} className="grid-image" />
      <h3>{event.name}</h3>
      <p><strong>Sport:</strong> {event.sport}</p>
      <p><strong>Status:</strong> {event.status}</p>
      <p><strong>Rewards:</strong> {event.rewards} Tokens/NFTs</p>
      <p><strong>Participants:</strong> {event.participants.length}</p>
      
      <div className="text-center mt-4">
        {event.status === 'Upcoming' && (
          <button 
            className="button" 
            onClick={() => setIsParticipateModalOpen(true)}
          >
            Participate
          </button>
        )}
        {event.status === 'Ongoing' && (
          <button 
            className="button" 
            onClick={() => setIsParticipateModalOpen(true)}
          >
            Join Now
          </button>
        )}
      </div>

      {/* Participate Tournament Modal */}
      {isParticipateModalOpen && (
        <ParticipateTournamentModal 
          event={event} 
          onClose={() => setIsParticipateModalOpen(false)} 
          onParticipate={handleParticipate}
        />
      )}
    </div>
  );
};

export default EventCard;
