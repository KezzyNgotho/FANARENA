import React, { useState, useEffect } from 'react';
import '../index.css';

interface SpectateEventProps {
  // Define any props if needed
}

const SpectateEvent: React.FC<SpectateEventProps> = () => {
  const [liveEvents, setLiveEvents] = useState([
    {
      id: 1,
      name: 'Championship Finals',
      sport: 'Soccer',
      liveScore: '2 - 1',
      liveStreamUrl: 'https://example.com/live-stream-1', // Replace with actual URL
    },
    {
      id: 2,
      name: 'Semi-Finals',
      sport: 'Basketball',
      liveScore: '98 - 95',
      liveStreamUrl: 'https://example.com/live-stream-2',
    },
    // Add more live events as needed
  ]);

  // Function to fetch live events (mock implementation)
  const fetchLiveEvents = () => {
    // Integrate with a real-time API or service for live data
    console.log('Fetching live events...');
    // Update liveEvents state with real data
  };

  useEffect(() => {
    // Simulate fetching live events on component mount
    fetchLiveEvents();
  }, []);

  return (
    <div className="grid-container">
      {liveEvents.map(event => (
        <div key={event.id} className="grid-item">
          <img src="/src/assets/live-event.jpeg" alt={event.name} className="grid-image" />
          <h3>{event.name}</h3>
          <p><strong>Sport:</strong> {event.sport}</p>
          <p><strong>Live Score:</strong> {event.liveScore}</p>
          <div className="text-center mt-4">
            <a href={event.liveStreamUrl} target="_blank" rel="noopener noreferrer" className="button">
              Watch Live
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpectateEvent;
