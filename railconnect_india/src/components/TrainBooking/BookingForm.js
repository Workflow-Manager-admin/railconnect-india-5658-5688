import React, { useState, useContext } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { ThemeContext } from '../../contexts/ThemeContext';
import { stations } from '../../data/mockTrains';
import '../../styles/glassmorphism.css';

/**
 * BookingForm component for searching trains
 * 
 * PUBLIC_INTERFACE
 * @param {Object} props
 * @param {Function} props.onSearch - Handler for search submission
 */
const BookingForm = ({ onSearch }) => {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '1'
  });
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);
  
  // Filter stations based on current input
  const fromSuggestions = stations.filter(station => 
    station.toLowerCase().includes(formData.from.toLowerCase())
  );
  const toSuggestions = stations.filter(station => 
    station.toLowerCase().includes(formData.to.toLowerCase())
  );
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Show suggestions on input
    if (name === 'from') setShowFromSuggestions(true);
    if (name === 'to') setShowToSuggestions(true);
  };
  
  const selectSuggestion = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'from') setShowFromSuggestions(false);
    if (field === 'to') setShowToSuggestions(false);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };
  
  // Get tomorrow's date in YYYY-MM-DD format for the date input default
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDate = tomorrow.toISOString().split('T')[0];
  
  return (
    <form className={`booking-form ${theme}-form`} onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="from">From Station</label>
          <div className="input-with-suggestions">
            <Input
              type="text"
              id="from"
              name="from"
              value={formData.from}
              onChange={handleChange}
              placeholder="Enter origin station"
              required
            />
            {showFromSuggestions && fromSuggestions.length > 0 && (
              <div className={`suggestions ${theme}-suggestions`}>
                {fromSuggestions.slice(0, 5).map((station) => (
                  <div 
                    key={station} 
                    className="suggestion-item"
                    onClick={() => selectSuggestion('from', station)}
                  >
                    {station}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="to">To Station</label>
          <div className="input-with-suggestions">
            <Input
              type="text"
              id="to"
              name="to"
              value={formData.to}
              onChange={handleChange}
              placeholder="Enter destination station"
              required
            />
            {showToSuggestions && toSuggestions.length > 0 && (
              <div className={`suggestions ${theme}-suggestions`}>
                {toSuggestions.slice(0, 5).map((station) => (
                  <div 
                    key={station} 
                    className="suggestion-item"
                    onClick={() => selectSuggestion('to', station)}
                  >
                    {station}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="date">Journey Date</label>
          <Input
            type="date"
            id="date"
            name="date"
            value={formData.date || defaultDate}
            onChange={handleChange}
            min={defaultDate}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="passengers">Passengers</label>
          <Input
            type="number"
            id="passengers"
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            min="1"
            max="6"
            required
          />
        </div>
        
        <div className="form-group form-button-group">
          <Button type="submit" variant="primary">
            Search Trains
          </Button>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
