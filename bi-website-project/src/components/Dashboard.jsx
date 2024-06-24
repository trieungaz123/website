// Dashboard.js
import React from 'react';

const Dashboard = ({ menuOpen }) => {
  return (
    <div
      id="dashboard"
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
        title="Power BI Dashboard"
        width="100%"
        height="100%"
        src="https://app.powerbi.com/reportEmbed?reportId=c82a3d0f-1d45-4be0-9595-58ec4ad436d0&autoAuth=true&ctid=4b47a5cc-79a9-478c-b249-c041d9e891f1"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}

export default Dashboard;
