import React, { useState } from 'react';
import '../index.css';

interface SponsorshipDeal {
  id: number;
  sponsorName: string;
  dealType: 'Banner' | 'Sponsored Event' | 'Exclusive Rights';
  tokenReward: number;
  description: string;
}

const SponsorshipDeals: React.FC = () => {
  // Mock data for sponsorship deals
  const [deals, setDeals] = useState<SponsorshipDeal[]>([
    {
      id: 1,
      sponsorName: 'TechCorp',
      dealType: 'Banner',
      tokenReward: 200,
      description: 'Banner ads in Thunder Arena',
    },
    {
      id: 2,
      sponsorName: 'FastFoods',
      dealType: 'Sponsored Event',
      tokenReward: 500,
      description: 'Sponsored halftime show',
    },
    // Add more deals as needed
  ]);

  const [newDeal, setNewDeal] = useState<SponsorshipDeal>({
    id: 0,
    sponsorName: '',
    dealType: 'Banner',
    tokenReward: 0,
    description: '',
  });

  const handleAddDeal = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      newDeal.sponsorName.trim() !== '' &&
      newDeal.tokenReward > 0 &&
      newDeal.description.trim() !== ''
    ) {
      setDeals([...deals, { ...newDeal, id: deals.length + 1 }]);
      setNewDeal({ id: 0, sponsorName: '', dealType: 'Banner', tokenReward: 0, description: '' });
      alert('Sponsorship deal added successfully!');
    } else {
      alert('Please fill in all fields with valid data.');
    }
  };

  return (
    <div className="card">
      <h2>Sponsorship Deals & Advertising</h2>
      
      {/* Existing Sponsorship Deals */}
      {deals.length === 0 ? (
        <p>No sponsorship deals yet.</p>
      ) : (
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Sponsor Name</th>
              <th>Deal Type</th>
              <th>Token Reward</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {deals.map((deal) => (
              <tr key={deal.id}>
                <td>{deal.sponsorName}</td>
                <td>{deal.dealType}</td>
                <td>{deal.tokenReward}</td>
                <td>{deal.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Add New Sponsorship Deal */}
      <h3 className="mt-6">Add New Sponsorship Deal</h3>
      <form onSubmit={handleAddDeal}>
        <div className="form-group">
          <label>Sponsor Name</label>
          <input
            type="text"
            className="form-input"
            value={newDeal.sponsorName}
            onChange={(e) => setNewDeal({ ...newDeal, sponsorName: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Deal Type</label>
          <select
            className="form-input"
            value={newDeal.dealType}
            onChange={(e) => setNewDeal({ ...newDeal, dealType: e.target.value as SponsorshipDeal['dealType'] })}
            required
          >
            <option value="Banner">Banner</option>
            <option value="Sponsored Event">Sponsored Event</option>
            <option value="Exclusive Rights">Exclusive Rights</option>
          </select>
        </div>
        <div className="form-group">
          <label>Token Reward</label>
          <input
            type="number"
            className="form-input"
            value={newDeal.tokenReward}
            onChange={(e) => setNewDeal({ ...newDeal, tokenReward: Number(e.target.value) })}
            min="1"
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-input"
            value={newDeal.description}
            onChange={(e) => setNewDeal({ ...newDeal, description: e.target.value })}
            placeholder="e.g., Banner ads in Thunder Arena"
            required
          />
        </div>
        <div className="text-center mt-4">
          <button type="submit" className="button">Add Deal</button>
        </div>
      </form>
    </div>
  );
};

export default SponsorshipDeals;
