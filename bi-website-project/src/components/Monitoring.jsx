// Dashboard.js
import React from 'react';

const Monitoring = ({ menuOpen }) => {
  return (
    <div
      id="monitoring"
      style={{
        position: 'fixed',
        top: '0',
        left: '0px',  // Adjust left position based on menuOpen state
        width: 'calc(100% )', // Adjust width based on menuOpen state
        height: '100%',
        zIndex: '1',
        overflow: 'auto',
        transition: 'left 0.3s, width 0.3s'
      }}
    >
      <iframe
        title="Monitoring"
        width="100%"
        height="100%"
        src="https://app.powerbi.com/view?r=eyJrIjoiYzA2MzE5OTUtNTM4ZS00OWNlLTk4MjAtZDVjNjdiNjIwNTFlIiwidCI6IjRiNDdhNWNjLTc5YTktNDc4Yy1iMjQ5LWMwNDFkOWU4OTFmMSIsImMiOjN9"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default Monitoring;
