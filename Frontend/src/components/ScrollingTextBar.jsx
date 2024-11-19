import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/scrollingTextBar.css';

const ScrollingTextBar = () => {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/texts');
        setTexts(response.data);
      } catch (error) {
        console.error('Error fetching texts:', error);
      }
    };
    fetchTexts();
  }, []);

  return (
    <div className="scrolling-container" style={{marginTop:'-20px', marginLeft:'-10%', width:'120%'}}>
      <div className="scrolling-text">
        {texts.map((text, index) => (
          <span key={index} className="scrolling-item">
            {text.text}
            {index < texts.length - 1 && <span className="bullet"> • </span>}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingTextBar;
