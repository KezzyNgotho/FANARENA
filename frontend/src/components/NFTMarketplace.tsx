import React from 'react';
import '../index.css';

const NFTMarketplace: React.FC = () => {
  const nfts = [
    { id: 1, name: 'Eagles Digital Jersey', price: '0.5 ETH', imageUrl: '/assets/nft1.jpeg' },
    { id: 2, name: 'Signed Basketball', price: '0.8 ETH', imageUrl: '/assets/nft2.jpeg' },
  ];

  return (
    <div className="grid-container">
      {nfts.map((nft) => (
        <div key={nft.id} className="grid-item">
          <img src={nft.imageUrl} alt={nft.name} className="grid-image" />
          <h3>{nft.name}</h3>
          <p><strong>Price:</strong> {nft.price}</p>
          <button className="button">Buy NFT</button>
        </div>
      ))}
    </div>
  );
};

export default NFTMarketplace;
