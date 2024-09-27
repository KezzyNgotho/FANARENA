import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import CreateTournamentModal from '../components/CreateTournamentModal';
import FantasyLeagueCard from '../components/FantasyLeagueCard';
import SpectateEvent from '../components/SpectateEvent';
import '../index.css';

interface Tournament {
  id: number;
  name: string;
  sport: string;
  imageUrl: string;
  participants: string[];
  status: 'Upcoming' | 'Ongoing' | 'Completed';
  rewards: number;
}

const GamifiedSportsEventsPage: React.FC = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([
    {
      id: 1,
      name: 'Summer Soccer League',
      sport: 'Soccer',
      imageUrl: '/src/assets/summer.jpeg',
      participants: ['User123', 'User456'],
      status: 'Ongoing',
      rewards: 1000,
    },
    {
      id: 2,
      name: 'Winter Basketball Tournament',
      sport: 'Basketball',
      imageUrl: '/src/assets/winter3.jpeg',
      participants: ['User789'],
      status: 'Upcoming',
      rewards: 1500,
    },
  ]);

  const [fantasyLeagues, setFantasyLeagues] = useState([
    {
      id: 1,
      name: 'E-Sports Fantasy League',
      sport: 'E-Sports',
      imageUrl: '/src/assets/fantasy.jpeg',
      participants: ['User123', 'User456', 'User789'],
      standings: [
        { team: 'Team Alpha', points: 250 },
        { team: 'Team Beta', points: 200 },
        { team: 'Team Gamma', points: 150 },
      ],
    },
  ]);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleCreateTournament = (newTournament: Omit<Tournament, 'id' | 'participants' | 'status'>) => {
    setTournaments([...tournaments, { id: tournaments.length + 1, ...newTournament, participants: [], status: 'Upcoming' }]);
  };

  const handleParticipateTournament = (tournamentId: number, user: string) => {
    setTournaments(tournaments.map(t => t.id === tournamentId ? { ...t, participants: [...t.participants, user] } : t));
  };

  const fetchRealWorldData = () => {
    console.log('Fetching real-world sports data...');
  };

  useEffect(() => {
    fetchRealWorldData();
  }, []);

  return (
    <div className="container">
      <h1>Gamified Sports Events</h1>

      <div className="text-center mt-6">
        <button 
          className="button" 
          onClick={() => setIsCreateModalOpen(true)}
        >
          Create New Tournament
        </button>
      </div>

      {isCreateModalOpen && (
        <CreateTournamentModal 
          onClose={() => setIsCreateModalOpen(false)} 
          onCreate={handleCreateTournament}
        />
      )}

      <section className="grid-section">
        <h2>Upcoming & Ongoing Tournaments</h2>
        <div className="grid-container">
          {tournaments.map((tournament) => (
            <EventCard 
              key={tournament.id} 
              event={tournament} 
              onParticipate={handleParticipateTournament} 
            />
          ))}
        </div>
      </section>

      <section className="grid-section">
        <h2>Fantasy Leagues</h2>
        <div className="grid-container">
          {fantasyLeagues.map((league) => (
            <FantasyLeagueCard key={league.id} league={league} />
          ))}
        </div>
      </section>

      <section className="grid-section">
        <h2>Spectate Events</h2>
        <SpectateEvent />
      </section>
    </div>
  );
};

export default GamifiedSportsEventsPage;
