import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Navbar from './Navbar';
import TrainBooking from './TrainBooking/TrainBooking';
import TrainTracking from './TrainTracking/TrainTracking';
import Card from './ui/Card';
import Button from './ui/Button';
import '../styles/glassmorphism.css';

/**
 * Main container component for the RailConnect India application
 * Includes the main layout and all major sections
 * 
 * PUBLIC_INTERFACE
 */
const MainContainer = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`main-container ${theme}-container`}>
      <Navbar />
      
      <div className="container content-container">
        <header className="header">
          <h1>Welcome to Indian Railways</h1>
          <p className="subtitle">Book tickets and track trains in real-time</p>
        </header>
        
        <div className="sections-grid">
          <Card className="section-card">
            <h2>Train Booking</h2>
            <TrainBooking />
          </Card>
          
          <Card className="section-card">
            <h2>Real-time Train Tracking</h2>
            <TrainTracking />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
