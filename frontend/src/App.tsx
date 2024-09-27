import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import VirtualStadiumsPage from './pages/VirtualStadiumsPage';
import TeamManagementPage from './pages/TeamManagementPage';
import GamifiedSportsEventsPage from './pages/GamifiedSportsEventsPage';
import InGameEconomyPage from './pages/InGameEconomyPage';
import SocialAndFanInteractionPage from './pages/SocialAndFanInteractionPage'; 
import CrossSportMultiLeagueSupportPage from './pages/CrossSportMultiLeagueSupportPage'; 
import Header from './components/Header';  
import Footer from './components/Footer';  
import './index.css';

const App: React.FC = () => {
  const location = useLocation();
  
  const isLandingOrLoginPage = location.pathname === '/' || location.pathname === '/login';

  return (
    <>
      {/* Render Header on all pages except the LandingPage and LoginPage */}
      {!isLandingOrLoginPage && <Header />}

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/virtual-stadiums" element={<VirtualStadiumsPage />} />
        <Route path="/team-management" element={<TeamManagementPage />} />
        <Route path="/gamified-events" element={<GamifiedSportsEventsPage />} />
        <Route path="/economy" element={<InGameEconomyPage />} />
        <Route path="/fan-interaction" element={<SocialAndFanInteractionPage />} /> 
        <Route path="/cross-sport" element={<CrossSportMultiLeagueSupportPage />} />
        
      </Routes>

      {/* Render Footer only on the LandingPage */}
      {location.pathname === '/' && <Footer />}
    </>
  );
};

// Wrap App with Router
const AppWrapper: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
