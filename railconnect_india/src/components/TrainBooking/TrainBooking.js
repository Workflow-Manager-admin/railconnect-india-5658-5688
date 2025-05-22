import React, { useState } from 'react';
import BookingForm from './BookingForm';
import TrainList from './TrainList';
import Card from '../ui/Card';
import { mockTrains } from '../../data/mockTrains';
import '../../styles/glassmorphism.css';

/**
 * Main TrainBooking component that combines search form and results
 * 
 * PUBLIC_INTERFACE
 */
const TrainBooking = () => {
  const [searchParams, setSearchParams] = useState(null);
  const [filteredTrains, setFilteredTrains] = useState([]);
  const [bookingDetails, setBookingDetails] = useState(null);
  
  // Handle train search
  const handleSearch = (formData) => {
    setSearchParams(formData);
    
    // Filter trains based on search criteria (using mock data)
    // In a real app, this would be an API call
    const results = mockTrains.filter(train => 
      train.from.toLowerCase().includes(formData.from.toLowerCase()) &&
      train.to.toLowerCase().includes(formData.to.toLowerCase())
    );
    
    setFilteredTrains(results);
    setBookingDetails(null); // Reset any existing booking
  };
  
  // Handle train booking
  const handleBookTrain = (train, classType) => {
    setBookingDetails({
      train,
      classType,
      passengers: searchParams ? parseInt(searchParams.passengers) : 1,
      journeyDate: searchParams ? searchParams.date : new Date().toISOString().split('T')[0]
    });
  };
  
  return (
    <div className="train-booking">
      <BookingForm onSearch={handleSearch} />
      
      {searchParams && (
        <div className="search-results">
          <TrainList 
            trains={filteredTrains} 
            onBookTrain={handleBookTrain} 
          />
        </div>
      )}
      
      {bookingDetails && (
        <Card className="booking-confirmation">
          <h3>Booking Confirmation</h3>
          <div className="booking-summary">
            <div className="booking-detail">
              <strong>Train:</strong> {bookingDetails.train.name} ({bookingDetails.train.number})
            </div>
            <div className="booking-detail">
              <strong>Journey:</strong> {bookingDetails.train.from} to {bookingDetails.train.to}
            </div>
            <div className="booking-detail">
              <strong>Date:</strong> {bookingDetails.journeyDate}
            </div>
            <div className="booking-detail">
              <strong>Time:</strong> {bookingDetails.train.departure} - {bookingDetails.train.arrival}
            </div>
            <div className="booking-detail">
              <strong>Class:</strong> {bookingDetails.classType.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </div>
            <div className="booking-detail">
              <strong>Passengers:</strong> {bookingDetails.passengers}
            </div>
            <div className="booking-detail total">
              <strong>Total Fare:</strong> ₹{bookingDetails.train.price[bookingDetails.classType] * bookingDetails.passengers}
            </div>
          </div>
          <div className="booking-message">
            Booking confirmed! (This is a mock booking)
          </div>
        </Card>
      )}
    </div>
  );
};

export default TrainBooking;
