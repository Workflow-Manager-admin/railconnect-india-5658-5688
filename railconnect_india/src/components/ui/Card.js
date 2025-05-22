import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import '../../styles/glassmorphism.css';

/**
 * Card component with glassmorphism effect that adapts to the current theme
 * 
 * PUBLIC_INTERFACE
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child elements to render inside the card
 * @param {string} [props.className] - Additional CSS class names
 * @param {Object} [props.style] - Additional inline styles
 */
const Card = ({ children, className = '', style = {}, ...props }) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div 
      className={`glass-card ${theme}-card ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
