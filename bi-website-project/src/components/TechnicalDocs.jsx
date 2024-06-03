// TechnicalDocs.js
import React from 'react';

const TechnicalDocs = () => {
  return (
    <div
      id="technical-docs"
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '1',
        overflow: 'auto',
        backgroundColor: '#fff' // Optional: Add a background color for better readability
      }}
    >
      <iframe
        title="Technical Docs"
        src="https://docs.google.com/presentation/d/1-GYY9yk8-r3zXlQsZMn4NKWP3zEb7PyKaGTW2PHIHAw/embed?start=false&loop=false&delayms=3000"
        frameBorder="0"
        width="100%"
        height="100%"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TechnicalDocs;
