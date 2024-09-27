import React, { useState } from 'react';
import '../index.css';

interface FantasyLeague {
  id: number;
  name: string;
  sport: string;
  imageUrl: string;
  participants: string[];
  standings: { team: string; points: number; }[];
}

interface FantasyLeagueCardProps {
  league: FantasyLeague;
}

const FantasyLeagueCard: React.FC<FantasyLeagueCardProps> = ({ league }) => {
  const [isViewStandings, setIsViewStandings] = useState(false);

  const currentUser = 'CurrentUser'; // Replace with actual user data

  const handleJoinLeague = () => {
    // Implement join league functionality
    alert(`You have joined the ${league.name} fantasy league!`);
  };

  return (
    <div className="grid-item">
      <img src={league.imageUrl} alt={league.name} className="grid-image" />
      <h3>{league.name}</h3>
      <p><strong>Sport:</strong> {league.sport}</p>
      <p><strong>Participants:</strong> {league.participants.length}</p>
      
      <div className="text-center mt-4">
        <button className="button" onClick={handleJoinLeague}>Join League</button>
        <button 
          className="button back-button ml-3" 
          onClick={() => setIsViewStandings(true)}
        >
          View Standings
        </button>
      </div>

      {/* View Standings Modal */}
      {isViewStandings && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Standings - {league.name}</h2>
            <ul>
              {league.standings.map((team, index) => (
                <li key={index}>
                  <strong>{team.team}</strong>: {team.points} Points
                </li>
              ))}
            </ul>
            <div className="text-center mt-4">
              <button className="button back-button" onClick={() => setIsViewStandings(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FantasyLeagueCard;
