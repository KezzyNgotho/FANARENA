import React from 'react';
import '../index.css';

interface Player {
  id: number;
  name: string;
  role: string;
  nftId: string;
  skill: number;
}

interface PlayerCardProps {
  player: Player;
  onRemove: (playerId: number) => void;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player, onRemove }) => {
  return (
    <div className="player-card">
      <h4>{player.name}</h4>
      <p><strong>Role:</strong> {player.role}</p>
      <p><strong>NFT ID:</strong> {player.nftId}</p>
      <p><strong>Skill Level:</strong> {player.skill}/100</p>
      <button 
        className="button back-button mt-2" 
        onClick={() => onRemove(player.id)}
      >
        Remove Player
      </button>
    </div>
  );
};

export default PlayerCard;
