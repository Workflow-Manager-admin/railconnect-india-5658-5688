import React, { useContext } from 'react';
import ThemeToggle from './ui/ThemeToggle';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/glassmorphism.css';

/**
 * Navigation bar component for the RailConnect India application
 * 
 * PUBLIC_INTERFACE
 */
const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <nav className={`navbar glass-navbar ${theme}-navbar`}>
      <div className="container navbar-container">
        <div className="logo">
          <span className="logo-symbol">🚆</span>
          <span className="logo-text">RailConnect India</span>
        </div>
        
        <div className="navbar-actions">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
