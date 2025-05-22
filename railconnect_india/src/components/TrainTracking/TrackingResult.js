import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Card from '../ui/Card';
import '../../styles/glassmorphism.css';

/**
 * TrackingResult component to display train schedule information
 * 
 * PUBLIC_INTERFACE
 * @param {Object} props
 * @param {Object} props.trackingData - Train schedule data to display
 * @param {boolean} props.isLoading - Loading state indicator
 * @param {Object} props.error - Error object if request failed
 */
const TrackingResult = ({ trackingData, isLoading, error }) => {
  const { theme } = useContext(ThemeContext);
  
  if (isLoading) {
    return (
      <div className={`tracking-loader ${theme}-loader`}>
        <div className="loader-animation"></div>
        <p>Fetching train schedule information...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <Card className="tracking-error">
        <h3>Error Fetching Schedule</h3>
        <p>{error.message || 'Failed to fetch train schedule information. Please try again.'}</p>
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
              <span className="train-type">{trackingData.data?.train_type || 'N/A'}</span>
            </div>
          </div>
          
          <div className="tracking-details">
            <div className="detail-item">
              <span className="detail-label">Origin:</span>
              <span className="detail-value">{trackingData.data?.train_origin_station || 'N/A'}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Destination:</span>
              <span className="detail-value">{trackingData.data?.train_destination_station || 'N/A'}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Total Travel Time:</span>
              <span className="detail-value">{trackingData.data?.total_travel_time || 'N/A'}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Run Days:</span>
              <span className="detail-value">{trackingData.data?.run_days || 'N/A'}</span>
            </div>
          </div>
          
          {trackingData.data?.route_stations && (
            <div className="train-route">
              <h4>Train Schedule</h4>
              
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th>Station</th>
                    <th>Day</th>
                    <th>Arrival</th>
                    <th>Departure</th>
                    <th>Halt</th>
                    <th>Distance</th>
                  </tr>
                </thead>
                <tbody>
                  {trackingData.data?.route_stations.map((station, index) => (
                    <tr key={index}>
                      <td>{station.station_name}</td>
                      <td>{station.day}</td>
                      <td>{station.arrival_time}</td>
                      <td>{station.departure_time}</td>
                      <td>{station.halt_time}</td>
                      <td>{station.distance_from_origin} km</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      ) : (
        <div className="no-data-message">
          <h3>No Schedule Available</h3>
          <p>Could not find schedule information for this train number.</p>
          <p>Please verify the train number and try again.</p>
        </div>
      )}
    </Card>
  );
};

export default TrackingResult;
