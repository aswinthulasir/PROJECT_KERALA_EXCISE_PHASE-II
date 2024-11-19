import React from 'react';
import '../styles/newsScroll.css'

const AutoScrollingBox = ({ title, items, bgColor }) => {
  return (
    <div className="scrolling-box" style={{ backgroundColor: bgColor }}>
      <h4>{title}</h4>
      <div className="scroll-container">
        <ul className="scrolling-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoScrollingBox;
