import React, { useState } from 'react';
import TokenBalance from '../components/TokenBalance';
import EarnTokens from '../components/EarnTokens';
import SpendTokens from '../components/SpendTokens';
import TransactionHistory from '../components/TransactionHistory';
import SponsorshipDeals from '../components/SponsorshipDeals';
import '../index.css';

// Define the Transaction interface
interface Transaction {
  id: number;
  type: 'Earned' | 'Spent'; // Restricting to specific string literals
  description: string;
  amount: number;
  date: string;
}

const InGameEconomyPage: React.FC = () => {
  // Mock data for transaction history
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, type: 'Earned', description: 'Attended Soccer Match', amount: 100, date: '2024-04-01' },
    { id: 2, type: 'Spent', description: 'Purchased Player NFT', amount: -50, date: '2024-04-02' },
  ]);

  // Mock data for token balance
  const [tokenBalance, setTokenBalance] = useState(500);

  // Function to handle earning tokens
  const handleEarnTokens = (amount: number, description: string) => {
    setTokenBalance(tokenBalance + amount);
    setTransactions([
      { id: transactions.length + 1, type: 'Earned', description, amount, date: new Date().toISOString().split('T')[0] },
      ...transactions,
    ]);
  };

  // Function to handle spending tokens
  const handleSpendTokens = (amount: number, description: string) => {
    if (tokenBalance >= amount) {
      setTokenBalance(tokenBalance - amount);
      setTransactions([
        { id: transactions.length + 1, type: 'Spent', description, amount: -amount, date: new Date().toISOString().split('T')[0] },
        ...transactions,
      ]);
    } else {
      alert('Insufficient token balance.');
    }
  };

  return (
    <div className="container">
      <h1>In-Game Economy</h1>

      {/* Token Balance Section */}
      <TokenBalance balance={tokenBalance} />

      {/* Earn Tokens Section */}
      <EarnTokens onEarn={handleEarnTokens} />

      {/* Spend Tokens Section */}
      <SpendTokens onSpend={handleSpendTokens} />

      {/* Transaction History Section */}
      <TransactionHistory transactions={transactions} />

      {/* Sponsorship Deals Section */}
      <SponsorshipDeals />
    </div>
  );
};

export default InGameEconomyPage;
