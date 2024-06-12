import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';  // Import icon from react-icons
import Dashboard from './Dashboard';  // Import the Dashboard component
import Monitoring from './Monitoring'; // Import the Monitoring component

const PowerBIEmbedComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const changeView = (view) => {
    setCurrentView(view);
    setMenuOpen(false);  // Close the menu after selecting an option
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Menu */}
      <div
        style={{
          position: 'fixed',
          left: '0',
          top: '0',
          padding: '10px 20px',
          zIndex: '9999',
          transition: 'width 0.3s',
          backgroundColor: 'transparent',
          opacity: '100%'
        }}
      >
        <button
          onClick={toggleMenu}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0',
            margin: '0',
            color: '#333',
            fontSize: '24px'
          }}
        >
          <AiOutlinePlusCircle />
        </button>
        {menuOpen && (
          <div
            style={{
              marginTop: '20px',
              backgroundColor: '#fff',
              boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
              minWidth: '160px',
              zIndex: '9999'
            }}
          >
            <a
              onClick={() => changeView('dashboard')}
              style={{ display: 'block', padding: '12px 16px', textDecoration: 'none', color: '#333', cursor: 'pointer' }}
            >
              Dashboard
            </a>
            <a
              onClick={() => changeView('monitoring')}
              style={{ display: 'block', padding: '12px 16px', textDecoration: 'none', color: '#333', cursor: 'pointer' }}
            >
              Monitoring
            </a>
            <a
              href="https://docs.google.com/presentation/d/1-GYY9yk8-r3zXlQsZMn4NKWP3zEb7PyKaGTW2PHIHAw/edit#slide=id.g2bc2e4df31b_0_0"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', padding: '12px 16px', textDecoration: 'none', color: '#333' }}
            >
              Tài liệu kỹ thuật
            </a>
            <a
              href="https://docs.google.com/spreadsheets/d/1GhUye7UXIDnOcrSvqw1hZzE_IgtChG2v/edit#gid=831906701"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', padding: '12px 16px', textDecoration: 'none', color: '#333' }}
            >
              Feedback
            </a>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ marginLeft: '0px' }}> {/* Adjust margin based on menuOpen state */}
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'monitoring' && <Monitoring />}
      </div>
    </div>
  );
};

export default PowerBIEmbedComponent;
