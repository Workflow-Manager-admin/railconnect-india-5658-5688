import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import '../../styles/glassmorphism.css';

/**
 * Button component with glassmorphism effect and theme support
 * 
 * PUBLIC_INTERFACE
 */
const Button = (props) => {
  const { 
    children, 
    variant = 'primary', 
    size = 'medium',
    onClick,
    className = '',
    disabled = false,
    ...otherProps 
  } = props;
  
  const { theme } = useContext(ThemeContext);
  
  return (
    <button
      className={`glass-button ${theme}-button ${variant} ${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
