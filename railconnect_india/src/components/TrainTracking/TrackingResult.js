import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Card from '../ui/Card';
import '../../styles/glassmorphism.css';

/**
 * TrackingResult component to display train tracking information
 * 
 * PUBLIC_INTERFACE
 * @param {Object} props
 * @param {Object} props.trackingData - Train tracking data to display
 * @param {boolean} props.isLoading - Loading state indicator
 * @param {Object} props.error - Error object if request failed
 */
const TrackingResult = ({ trackingData, isLoading, error }) => {
  const { theme } = useContext(ThemeContext);
  
  if (isLoading) {
    return (
      <div className={`tracking-loader ${theme}-loader`}>
        <div className="loader-animation"></div>
        <p>Fetching real-time train information...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <Card className="tracking-error">
        <h3>Error Fetching Data</h3>
        <p>{error.message || 'Failed to fetch train tracking information. Please try again.'}</p>
        <p className="error-details">
          This could be due to network issues, invalid train number, or API limitations.
        </p>
      </Card>
    );
  }
  
  if (!trackingData) {
    return null;
  }
  
  // Mock data structure - in a real app this would match the API response
  return (
    <Card className="tracking-result">
      {trackingData.success ? (
        <>
          <div className="tracking-header">
            <h3>{trackingData.data?.train_name || 'Train'} ({trackingData.data?.train_number})</h3>
            <div className="train-status">
              <span className={`status-indicator ${trackingData.data?.delay_status === 'ON TIME' ? 'on-time' : 'delayed'}`}></span>
              {trackingData.data?.delay_status || 'Status Unknown'}
            </div>
          </div>
          
          <div className="tracking-details">
            <div className="detail-item">
              <span className="detail-label">Current Station:</span>
              <span className="detail-value">{trackingData.data?.current_station_name || 'N/A'}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Last Update:</span>
              <span className="detail-value">{trackingData.data?.last_update || 'N/A'}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Next Station:</span>
              <span className="detail-value">{trackingData.data?.next_station_name || 'N/A'}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Expected Arrival:</span>
              <span className="detail-value">{trackingData.data?.expected_arrival || 'N/A'}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Distance Covered:</span>
              <span className="detail-value">{trackingData.data?.distance_covered || 'N/A'} km</span>
            </div>
          </div>
          
          {trackingData.data?.route && (
            <div className="train-route">
              <h4>Journey Progress</h4>
              <div className="route-progress">
                <div 
                  className="progress-bar"
                  style={{ width: `${trackingData.data?.journey_progress || 0}%` }}
                ></div>
              </div>
              
              <div className="route-stations">
                {trackingData.data?.route.map((station, index) => (
                  <div 
                    key={index}
                    className={`route-station ${station.status || ''}`}
                  >
                    <div className="station-time">{station.scheduled_arrival}</div>
                    <div className="station-dot"></div>
                    <div className="station-name">{station.station_name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="no-data-message">
          <h3>No Data Available</h3>
          <p>Could not find tracking information for this train number.</p>
          <p>Please verify the train number and try again.</p>
        </div>
      )}
    </Card>
  );
};

export default TrackingResult;
