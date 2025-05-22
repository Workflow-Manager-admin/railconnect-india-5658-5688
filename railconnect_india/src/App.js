import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import MainContainer from './components/MainContainer';
import './styles/app.css';

/**
 * Main App component for RailConnect India
 */
function App() {
  return (
    <ThemeProvider>
      <MainContainer />
    </ThemeProvider>
  );
}

export default App;
