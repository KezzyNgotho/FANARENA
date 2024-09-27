// src/components/Header.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import logo from '../assets/icon.jpeg';  

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container flex justify-between align-center">
        {/* Left Section: Logo and Brand Name */}
        <div className="header-left flex align-center">
          <img src={logo} alt="FanArena Logo" className="logo-img" />
          <Link to="/dashboard" className="logo-text">
            <h1>FanArena</h1>
          </Link>
        </div>
        
        {/* Middle Section: Navigation Links */}
        <nav className="header-nav">
          <ul className="nav-links flex">
            <li>
              <Link to="/team-management" className="nav-link">Teams</Link>
            </li>
            <li>
              <Link to="/virtual-stadiums" className="nav-link"> Stadiums</Link>
            </li>
            <li>
              <Link to="/gamified-events" className="nav-link">Events</Link>
            </li>
            <li>
              <Link to="/Economy" className="nav-link">Bank</Link>
            </li>
            <li>
              <Link to="/fan-interaction" className="nav-link">Corner</Link>
            </li>
            <li>
              <Link to="/cross-sport" className="nav-link">Sports</Link>
            </li>
          </ul>
        </nav>
        
        {/* Right Section: Profile Image */}
        {/* <div className="header-right">
          <img src="https://via.placeholder.com/40" alt="Profile" className="profile-img" />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
