import React from 'react';
import '../index.css';

interface FanClub {
  id: number;
  name: string;
  description: string;
  members: number;
}

interface FanClubCardProps {
  club: FanClub;
}

const FanClubCard: React.FC<FanClubCardProps> = ({ club }) => {
  return (
    <div className="grid-item">
      <h3>{club.name}</h3>
      <p>{club.description}</p>
      <p><strong>Members:</strong> {club.members}</p>
      <div className="text-center mt-4">
        <button className="button">Join Fan Club</button>
      </div>
    </div>
  );
};

export default FanClubCard;
