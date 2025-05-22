import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Card from '../ui/Card';
import Button from '../ui/Button';
import '../../styles/glassmorphism.css';

/**
 * TrainList component to display train search results
 * 
 * PUBLIC_INTERFACE
 * @param {Object} props
 * @param {Array} props.trains - List of trains to display
 * @param {Function} props.onBookTrain - Handler for booking action
 */
const TrainList = ({ trains, onBookTrain }) => {
  const { theme } = useContext(ThemeContext);
  
  if (!trains || trains.length === 0) {
    return (
      <div className={`no-results ${theme}-text`}>
        <p>No trains found for this route. Please try different stations or dates.</p>
      </div>
    );
  }
  
  return (
    <div className="train-list">
      {trains.map(train => (
        <Card key={train.id} className="train-card">
          <div className="train-header">
            <div className="train-name">
              <h3>{train.name}</h3>
              <span className="train-number">#{train.number}</span>
            </div>
            <div className="train-days">
              {train.daysOfWeek.join(' · ')}
            </div>
          </div>
          
          <div className="train-journey">
            <div className="train-station">
              <div className="time">{train.departure}</div>
              <div className="station">{train.from}</div>
            </div>
            
            <div className="journey-line">
              <div className="duration">{train.duration}</div>
              <div className="line"></div>
              <div className="distance">{train.distance}</div>
            </div>
            
            <div className="train-station">
              <div className="time">{train.arrival}</div>
              <div className="station">{train.to}</div>
            </div>
          </div>
          
          <div className="train-classes">
            {Object.entries(train.price).map(([cls, price]) => (
              <div key={cls} className="class-option">
                <div className="class-name">
                  {cls.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </div>
                <div className="class-price">₹{price}</div>
                <div className="class-availability">{train.availability[cls]}</div>
                <Button 
                  size="small" 
                  variant={train.availability[cls].includes('WL') ? 'outline' : 'primary'}
                  onClick={() => onBookTrain(train, cls)}
                >
                  Book
                </Button>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TrainList;
