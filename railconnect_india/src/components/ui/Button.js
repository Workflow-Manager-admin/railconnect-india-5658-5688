import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts/ThemeContext';
import '../../styles/glassmorphism.css';

/**
 * Button component with glassmorphism effect and theme support
 * 
 * PUBLIC_INTERFACE
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Button content
 * @param {string} [props.variant='primary'] - Button style variant
 * @param {string} [props.size='medium'] - Button size
 * @param {Function} [props.onClick] - Click handler function
 * @param {string} [props.className] - Additional CSS class names
 * @param {boolean} [props.disabled=false] - Whether button is disabled
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

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
