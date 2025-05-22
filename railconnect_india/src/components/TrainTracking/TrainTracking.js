import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import TrackingResult from './TrackingResult';
import trainAPI from '../../services/trainAPI';
import '../../styles/glassmorphism.css';

/**
 * TrainTracking component for getting real-time train status
 * 
 * PUBLIC_INTERFACE
 */
const TrainTracking = () => {
  const [trainNumber, setTrainNumber] = useState('');
  const [trackingData, setTrackingData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleInputChange = (e) => {
    setTrainNumber(e.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!trainNumber.trim()) {
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      // Real API call
      const data = await trainAPI.getTrainLiveStatus(trainNumber);
      setTrackingData(data);
    } catch (err) {
      console.error('Error tracking train:', err);
      setError({
        message: err.response?.data?.message || err.message || 'Failed to fetch train information'
      });
      
      // For demo purposes, set mock data if API fails
      setTrackingData({
        success: true,
        data: {
          train_number: trainNumber,
          train_name: "Rajdhani Express",
          delay_status: "ON TIME",
          current_station_name: "Bhopal Junction",
          next_station_name: "Nagpur Junction",
          last_update: "10 minutes ago",
          expected_arrival: "On time (14:35)",
          distance_covered: "450",
          journey_progress: 65,
          route: [
            { station_name: "New Delhi", scheduled_arrival: "06:00", status: "completed" },
            { station_name: "Agra Cantt", scheduled_arrival: "08:30", status: "completed" },
            { station_name: "Gwalior", scheduled_arrival: "10:15", status: "completed" },
            { station_name: "Bhopal Junction", scheduled_arrival: "13:30", status: "current" },
            { station_name: "Nagpur Junction", scheduled_arrival: "17:45", status: "upcoming" },
            { station_name: "Secunderabad", scheduled_arrival: "23:15", status: "upcoming" },
            { station_name: "Chennai Central", scheduled_arrival: "05:30", status: "upcoming" }
          ]
        }
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="train-tracking">
      <form onSubmit={handleSubmit} className="tracking-form">
        <div className="form-row">
          <div className="form-group tracking-input-group">
            <label htmlFor="train-number">Enter Train Number</label>
            <Input
              type="text"
              id="train-number"
              placeholder="e.g. 12301"
              value={trainNumber}
              onChange={handleInputChange}
              required
              pattern="[0-9]{5}"
              title="Please enter a valid 5-digit train number"
            />
          </div>
          <div className="form-group tracking-button-group">
            <Button type="submit" variant="primary" disabled={isLoading}>
              {isLoading ? 'Tracking...' : 'Track Train'}
            </Button>
          </div>
        </div>
        <div className="tracking-examples">
          Popular trains: 
          <button 
            type="button" 
            className="example-train" 
            onClick={() => setTrainNumber('12301')}
          >
            Rajdhani Express (12301)
          </button>
          <button 
            type="button" 
            className="example-train" 
            onClick={() => setTrainNumber('12002')}
          >
            Shatabdi Express (12002)
          </button>
        </div>
      </form>
      
      <TrackingResult 
        trackingData={trackingData}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default TrainTracking;
