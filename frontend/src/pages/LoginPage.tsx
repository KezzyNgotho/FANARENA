import React from 'react';
import '../index.css';

const LoginPage: React.FC = () => {
  const handleGoogleLogin = () => {
    console.log('Google Login Triggered');
    // Integrate Google OAuth2 here
  };

  const handleBlockchainLogin = () => {
    console.log('Blockchain Wallet Login Triggered');
    // Integrate Blockchain wallet login here
  };

  return (
    <div className="login-container">
      <h1 className="text-center">Join the FanArena Metaverse</h1>
      <div className="login-buttons">
        <button className="button" onClick={handleGoogleLogin}>
          Login with Google
        </button>
        <button className="button" onClick={handleBlockchainLogin}>
          Login with Blockchain Wallet
        </button>
      
        
      </div>
    </div>
  );
};

export default LoginPage;
