import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/headerfooter.css';

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="brand" onClick={() => navigate("/")}>
        Spectrum Analyzer - Team 5
      </div>
      <nav className="navigation">
        <button onClick={() => navigate("/")}>Home</button>
      </nav>
    </header>
  );
}

export default Header;
