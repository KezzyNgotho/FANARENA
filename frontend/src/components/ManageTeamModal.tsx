import React, { useState } from 'react';
import PlayerCard from '../components/PlayerCard';
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

interface ManageTeamModalProps {
  team: Team;
  onClose: () => void;
}

const ManageTeamModal: React.FC<ManageTeamModalProps> = ({ team, onClose }) => {
  const [players, setPlayers] = useState<Player[]>(team.players);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [newPlayerRole, setNewPlayerRole] = useState('');
  const [newPlayerNftId, setNewPlayerNftId] = useState('');
  const [newPlayerSkill, setNewPlayerSkill] = useState(50);

  const handleAddPlayer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPlayer: Player = {
      id: players.length + 1,
      name: newPlayerName,
      role: newPlayerRole,
      nftId: newPlayerNftId,
      skill: newPlayerSkill,
    };
    setPlayers([...players, newPlayer]);
    setNewPlayerName('');
    setNewPlayerRole('');
    setNewPlayerNftId('');
    setNewPlayerSkill(50);
  };

  const handleRemovePlayer = (playerId: number) => {
    setPlayers(players.filter(player => player.id !== playerId));
  };

  const handleTradeTeam = () => {
    alert('Trade team functionality to be implemented.');
  };

  const handleUpgradeTeam = () => {
    alert('Upgrade team functionality to be implemented.');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Manage Team: {team.name}</h2>
        <p><strong>Sport:</strong> {team.sport}</p>
        <p><strong>NFT ID:</strong> {team.nftId}</p>
        <p><strong>Performance:</strong> {team.performance}/100</p>

        {/* Players List */}
        <h3>Players</h3>
        <div className="players-list">
          {players.map(player => (
            <PlayerCard key={player.id} player={player} onRemove={handleRemovePlayer} />
          ))}
        </div>

        {/* Add New Player */}
        <h3>Add New Player</h3>
        <form onSubmit={handleAddPlayer}>
          <div className="form-group">
            <label>Player Name</label>
            <input 
              type="text" 
              className="form-input" 
              value={newPlayerName} 
              onChange={(e) => setNewPlayerName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <input 
              type="text" 
              className="form-input" 
              value={newPlayerRole} 
              onChange={(e) => setNewPlayerRole(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Player NFT ID</label>
            <input 
              type="text" 
              className="form-input" 
              value={newPlayerNftId} 
              onChange={(e) => setNewPlayerNftId(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Skill Level</label>
            <input 
              type="number" 
              className="form-input" 
              value={newPlayerSkill} 
              onChange={(e) => setNewPlayerSkill(Number(e.target.value))} 
              min="0" 
              max="100" 
              required 
            />
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="button">Add Player</button>
          </div>
        </form>

        {/* Action Buttons */}
        <div className="text-center mt-6">
          <button className="button" onClick={handleTradeTeam}>Trade Team NFT</button>
          <button className="button mt-3" onClick={handleUpgradeTeam}>Upgrade Team</button>
        </div>

        {/* Close Button */}
        <div className="text-center mt-6">
          <button className="button back-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ManageTeamModal;
