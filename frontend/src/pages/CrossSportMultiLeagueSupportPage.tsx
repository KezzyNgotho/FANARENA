import React, { useState } from 'react';
import '../index.css'; // Optional: if you need custom styles

// Define types for leagues and teams
type SportsLeagues = {
  [key: string]: string[];
};

type Teams = {
  [key: string]: string[];
};

const CrossSportMultiLeagueSupportPage: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState<string>('Football');
  const [selectedLeague, setSelectedLeague] = useState<string>('Premier League');
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);

  // Available sports
  const availableSports: string[] = ['Football', 'Basketball', 'Baseball', 'e-Sports', 'Tennis', 'Hockey'];

  // Available leagues per sport
  const availableLeagues: SportsLeagues = {
    Football: ['Premier League', 'La Liga', 'Serie A'],
    Basketball: ['NBA', 'EuroLeague'],
    Baseball: ['MLB', 'NPB'],
    'e-Sports': ['League of Legends', 'Dota 2', 'CS:GO'],
    Tennis: ['ATP', 'WTA'],
    Hockey: ['NHL', 'KHL'],
  };

  // Available teams per league
  const availableTeams: Teams = {
    'Premier League': ['Manchester United', 'Liverpool', 'Chelsea'],
    NBA: ['Los Angeles Lakers', 'Golden State Warriors', 'Brooklyn Nets'],
    MLB: ['New York Yankees', 'Los Angeles Dodgers', 'Chicago Cubs'],
    'League of Legends': ['Cloud9', 'TSM', 'G2 Esports'],
  };

  // Handle sport selection change
  const handleSportChange = (sport: string) => {
    setSelectedSport(sport);
    setSelectedLeague(availableLeagues[sport][0]); // Select the first league from the selected sport
    setSelectedTeams([]);
  };

  // Handle league selection change
  const handleLeagueChange = (league: string) => {
    setSelectedLeague(league);
    setSelectedTeams([]);
  };

  // Handle team selection
  const handleTeamSelection = (team: string) => {
    setSelectedTeams((prevTeams) =>
      prevTeams.includes(team) ? prevTeams.filter(t => t !== team) : [...prevTeams, team]
    );
  };

  return (
    <div className="cross-sport-page ">
      <h1>Cross-Sport & Multi-League Support</h1>

      {/* Sport Selection */}
      <div className="selection-container">
        <h2>Select a Sport</h2>
        <select
          value={selectedSport}
          onChange={(e) => handleSportChange(e.target.value)}
        >
          {availableSports.map((sport) => (
            <option key={sport} value={sport}>
              {sport}
            </option>
          ))}
        </select>
      </div>

      {/* League Selection */}
      <div className="selection-container">
        <h2>Select a League</h2>
        <select
          value={selectedLeague}
          onChange={(e) => handleLeagueChange(e.target.value)}
        >
          {availableLeagues[selectedSport].map((league) => (
            <option key={league} value={league}>
              {league}
            </option>
          ))}
        </select>
      </div>

      {/* Teams from selected League */}
      <div className="teams-container">
        <h2>Available Teams</h2>
        {availableTeams[selectedLeague] ? (
          <ul>
            {availableTeams[selectedLeague].map((team) => (
              <li key={team}>
                <label>
                  <input
                    type="checkbox"
                    value={team}
                    checked={selectedTeams.includes(team)}
                    onChange={() => handleTeamSelection(team)}
                  />
                  {team}
                </label>
              </li>
            ))}
          </ul>
        ) : (
          <p>No teams available for this league.</p>
        )}
      </div>

      {/* Hybrid Events Feature */}
      <div className="hybrid-events">
        <h2>Cross-Sport Hybrid Events</h2>
        <p>
          Imagine events where players or teams from different sports collaborate or compete
          in special hybrid events! Coming soon in our metaverse.
        </p>
      </div>

      {/* e-Sports Integration */}
      <div className="esports-integration">
        <h2>e-Sports and Traditional Sports Integration</h2>
        <p>
          We also integrate with popular e-sports leagues such as League of Legends, Dota 2, and CS:GO,
          bringing traditional sports and e-sports into one unified platform for all fans to enjoy.
        </p>
      </div>

      {/* Selected Teams Summary */}
      <div className="selected-teams-summary">
        <h2>Selected Teams</h2>
        {selectedTeams.length > 0 ? (
          <ul>
            {selectedTeams.map((team) => (
              <li key={team}>{team}</li>
            ))}
          </ul>
        ) : (
          <p>No teams selected.</p>
        )}
      </div>
    </div>
  );
};

export default CrossSportMultiLeagueSupportPage;
