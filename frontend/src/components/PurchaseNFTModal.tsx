import React, { useState } from 'react';
import '../index.css';

interface PurchaseNFTModalProps {
  onClose: () => void;
  onSpend: (amount: number, description: string) => void;
}

const PurchaseNFTModal: React.FC<PurchaseNFTModalProps> = ({ onClose, onSpend }) => {
  const [nftName, setNftName] = useState('');
  const [nftPrice, setNftPrice] = useState(0);

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (nftPrice > 0 && nftName.trim() !== '') {
      onSpend(nftPrice, `Purchased NFT: ${nftName}`);
      setNftName('');
      setNftPrice(0);
      onClose();
      alert('NFT purchased successfully!');
    } else {
      alert('Please enter a valid NFT name and price.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Purchase NFT</h2>
        <form onSubmit={handlePurchase}>
          <div className="form-group">
            <label>NFT Name</label>
            <input
              type="text"
              className="form-input"
              value={nftName}
              onChange={(e) => setNftName(e.target.value)}
              placeholder="e.g., Exclusive Player Card"
              required
            />
          </div>
          <div className="form-group">
            <label>Price (Tokens)</label>
            <input
              type="number"
              className="form-input"
              value={nftPrice}
              onChange={(e) => setNftPrice(Number(e.target.value))}
              min="1"
              required
            />
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="button">Purchase</button>
            <button type="button" className="button back-button ml-3" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PurchaseNFTModal;
