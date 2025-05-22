import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import '../../styles/glassmorphism.css';

/**
 * Button component with glassmorphism effect and theme support
 * 
 * PUBLIC_INTERFACE
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child elements
 * @param {string} [props.variant='primary'] - Button variant (primary, secondary, outline)
 * @param {string} [props.size='medium'] - Button size (small, medium, large)
 * @param {Function} [props.onClick] - Click handler function
 * @param {string} [props.className] - Additional CSS class names
 * @param {boolean} [props.disabled] - Whether button is disabled
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  className = '',
  disabled = false,
  ...props 
}) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <button
      className={`glass-button ${theme}-button ${variant} ${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
