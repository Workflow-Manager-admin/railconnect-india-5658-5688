import React, { createContext, useState, useEffect } from 'react';

// Create context for theme management
export const ThemeContext = createContext();

/**
 * ThemeProvider component that provides theme state and toggle functionality
 * to all child components in the application
 * 
 * PUBLIC_INTERFACE
 */
export const ThemeProvider = ({ children }) => {
  // Initialize theme state from local storage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('railconnect-theme');
    return savedTheme || 'dark';
  });

  // Effect to update document attributes when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('railconnect-theme', theme);
  }, [theme]);

  // Toggle theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
