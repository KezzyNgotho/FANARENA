import React, { useState } from 'react';
import PurchaseNFTModal from '../components/PurchaseNFTModal';
import PlaceBetModal from '../components/PlaceBetModal';
import UpgradeStadiumModal2 from './UpgradeStadiumModal2';
import AccessPremiumEventModal from '../components/AccessPremiumEventModal';

import '../index.css';

interface SpendTokensProps {
  onSpend: (amount: number, description: string) => void;
}

const SpendTokens: React.FC<SpendTokensProps> = ({ onSpend }) => {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const handleActionClick = (action: string) => {
    setSelectedAction(action);
  };

  const handleCloseModal = () => {
    setSelectedAction(null);
  };

  return (
    <div className="card">
      <h2>Spend Tokens</h2>
      <div className="spend-actions">
        <button className="button" onClick={() => handleActionClick('PurchaseNFT')}>
          Purchase NFT
        </button>
        <button className="button mt-3" onClick={() => handleActionClick('PlaceBet')}>
          Place Bet
        </button>
        <button className="button mt-3" onClick={() => handleActionClick('UpgradeStadium')}>
          Upgrade Stadium
        </button>
        <button className="button mt-3" onClick={() => handleActionClick('AccessPremiumEvent')}>
          Access Premium Event
        </button>
      </div>

      {/* Purchase NFT Modal */}
      {selectedAction === 'PurchaseNFT' && (
        <PurchaseNFTModal onClose={handleCloseModal} onSpend={onSpend} />
      )}

      {/* Place Bet Modal */}
      {selectedAction === 'PlaceBet' && (
        <PlaceBetModal onClose={handleCloseModal} onSpend={onSpend} />
      )}

      {/* Upgrade Stadium Modal */}
      {selectedAction === 'UpgradeStadium' && (
        <UpgradeStadiumModal2 onClose={handleCloseModal} onSpend={onSpend} />
      )}

      {/* Access Premium Event Modal */}
      {selectedAction === 'AccessPremiumEvent' && (
        <AccessPremiumEventModal onClose={handleCloseModal} onSpend={onSpend} />
      )}
    </div>
  );
};

export default SpendTokens;
