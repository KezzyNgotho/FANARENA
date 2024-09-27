import React, { useState } from 'react';
import ManageTeamModal from '../components/ManageTeamModal';
import '../index.css';

interface Player {
  id: number;
  name: string;
  role: string;
  nftId: string;
  skill: number;
}

interface Team {
  id: number;
  name: string;
  sport: string;
  imageUrl: string;
  nftId: string;
  performance: number;
  players: Player[];
}

interface TeamCardProps {
  team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

  return (
    <div className="grid-item">
      <img src={team.imageUrl} alt={team.name} className="grid-image" />
      <h3>{team.name}</h3>
      <p><strong>Sport:</strong> {team.sport}</p>
      <p><strong>Performance:</strong> {team.performance}/100</p>
      
      {/* Performance Progress Bar */}
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${team.performance}%` }}
        ></div>
      </div>

      <p><strong>NFT ID:</strong> {team.nftId}</p>
      <div className="text-center mt-4">
        <button 
          className="button" 
          onClick={() => setIsManageModalOpen(true)}
        >
          Manage Team
        </button>
      </div>

      {/* Manage Team Modal */}
      {isManageModalOpen && (
        <ManageTeamModal 
          team={team} 
          onClose={() => setIsManageModalOpen(false)} 
          // Add handlers for updating team, trading, etc.
        />
      )}
    </div>
  );
};

export default TeamCard;
