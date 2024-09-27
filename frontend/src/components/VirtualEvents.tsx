import React from 'react';
import '../index.css';

const VirtualEvents: React.FC = () => {
  const events = [
    { id: 1, name: 'Meet & Greet with John Doe', date: '2024-10-05', description: 'Virtual meet-and-greet with Eagles FC captain.' },
    { id: 2, name: 'Virtual Tailgate Party', date: '2024-10-12', description: 'Join fans for a virtual tailgate before the big game.' },
  ];

  return (
    <div className="grid-container">
      {events.map((event) => (
        <div key={event.id} className="grid-item">
          <h3>{event.name}</h3>
          <p><strong>Date:</strong> {event.date}</p>
          <p>{event.description}</p>
          <button className="button">Join Event</button>
        </div>
      ))}
    </div>
  );
};

export default VirtualEvents;
