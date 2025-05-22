import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import '../../styles/glassmorphism.css';

/**
 * Input component with glassmorphism effect and theme support
 * 
 * PUBLIC_INTERFACE
 * @param {Object} props - Component properties
 * @param {string} [props.type='text'] - Input type
 * @param {string} props.name - Input name
 * @param {string} props.placeholder - Input placeholder text
 * @param {string} [props.value] - Input value
 * @param {Function} [props.onChange] - Change handler function
 * @param {string} [props.className] - Additional CSS class names
 * @param {Object} [props.error] - Error message if validation fails
 */
const Input = ({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  className = '',
  error,
  ...props
}) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className="input-group">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`glass-input ${theme}-input ${className} ${error ? 'error' : ''}`}
        {...props}
      />
      {error && <div className="input-error">{error}</div>}
    </div>
  );
};

export default Input;
