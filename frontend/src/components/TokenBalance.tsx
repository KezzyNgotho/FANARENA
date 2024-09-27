import React from 'react';
import '../index.css';

interface TokenBalanceProps {
  balance: number;
}

const TokenBalance: React.FC<TokenBalanceProps> = ({ balance }) => {
  return (
    <div className="card">
      <h2>Your Token Balance</h2>
      <p className="token-balance">{balance} Tokens</p>
    </div>
  );
};

export default TokenBalance;
