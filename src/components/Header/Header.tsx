import React, { useState } from "react";
import './Header.css';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header">
      <div className="header-left">
        <button
          className={`menu-button ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <i className="fas fa-bars"></i>
        </button>
        {isMenuOpen && (
          <>
            <button className="menu-item">HOME</button>
            <button className="menu-item">SHOP</button>
            <button className="menu-item">MAGAZINE</button>
          </>
        )}
      </div>
      <div className="header-right">
        <button className="icon-button">
          <i className="fas fa-search"></i>
        </button>
        <button className="icon-button">
          <i className="fas fa-shopping-cart"></i>
        </button>
        <button className="login-button">LOGIN</button>
      </div>
    </header>
  );
}

export default Header;
