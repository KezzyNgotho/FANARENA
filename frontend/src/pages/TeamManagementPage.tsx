import React, { useState } from 'react';
import TeamCard from '../components/TeamCard';
import CreateTeamModal from '../components/CreateTeamModal';
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

const TeamManagementPage: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([
    {
      id: 1,
      name: 'Eagles FC',
      sport: 'Soccer',
      imageUrl: '/src/assets/team1.jpeg',
      nftId: 'NFT12345',
      performance: 85,
      players: [
        { id: 1, name: 'John Doe', role: 'Forward', nftId: 'P-NFT001', skill: 90 },
        { id: 2, name: 'Jane Smith', role: 'Midfielder', nftId: 'P-NFT002', skill: 80 },
      ],
    },
    {
      id: 2,
      name: 'Thunderbolts',
      sport: 'Basketball',
      imageUrl: '/src/assets/team2.jpeg',
      nftId: 'NFT67890',
      performance: 75,
      players: [
        { id: 3, name: 'Mike Johnson', role: 'Guard', nftId: 'P-NFT003', skill: 70 },
        { id: 4, name: 'Emily Davis', role: 'Center', nftId: 'P-NFT004', skill: 85 },
      ],
    },
  ]);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleCreateTeam = (newTeam: Omit<Team, 'id' | 'players'>) => {
    setTeams([...teams, { id: teams.length + 1, ...newTeam, players: [] }]);
  };

  return (
    <div className="container">
      <h1>Team Management</h1>
      
      <div className="text-center mt-6">
        <button 
          className="button" 
          onClick={() => setIsCreateModalOpen(true)}
        >
          Create New Team
        </button>
      </div>

      {isCreateModalOpen && (
        <CreateTeamModal 
          onClose={() => setIsCreateModalOpen(false)} 
          onCreate={handleCreateTeam}
        />
      )}

      <section className="grid-section">
        <div className="grid-container">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamManagementPage;
