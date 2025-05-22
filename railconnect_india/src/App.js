import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import MainContainer from './components/MainContainer';
import './styles/app.css';
import './styles/themes.css'; // Ensuring themes are properly loaded
import './styles/glassmorphism.css'; // Ensuring glassmorphism styles are properly loaded

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
