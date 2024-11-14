import React, { useState, useEffect } from 'react';
import '../styles/subNav.css';

const SubNavbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [fontSize, setFontSize] = useState(16);
  
    // Toggle Dark Mode
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
      document.body.className = isDarkMode ? 'light-mode' : 'dark-mode';
    };
  
    // Font Size Adjustment
    const increaseFontSize = () => {
      setFontSize((prevSize) => Math.min(prevSize + 2, 24));
    };
  
    const decreaseFontSize = () => {
      setFontSize((prevSize) => Math.max(prevSize - 2, 12));
    };
  
    // Apply font size to body
    useEffect(() => {
      document.body.style.fontSize = `${fontSize}px`;
    }, [fontSize]);
  
    // Scroll to the second section
    const handleSkipToContent = () => {
      const section = document.getElementById('main-content');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <div className="sub-navbar">
        {/* Language Dropdown */}
        <div className="dropdown">
          <button>Language</button>
          <div className="dropdown-content">
            <button onClick={() => alert('Switched to English')}>English</button>
            <button onClick={() => alert('മലയാളം')}>Malayalam</button>
          </div>
        </div>
  
        <div className="font-buttons">
          {/* Skip to Main Content */}
          <button onClick={handleSkipToContent}>Skip to Main Content</button>
  
          {/* Dark/Light Mode Toggle */}
          <button onClick={toggleDarkMode}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
  
          {/* Font Size Adjustment */}
          <button onClick={increaseFontSize}>A+</button>
          <button onClick={decreaseFontSize}>A-</button>
        </div>
      </div>
    );
  };
  
  
  export default SubNavbar;