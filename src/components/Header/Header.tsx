import React, { useState } from "react";
import './header.css';
import { useNavigate } from "react-router-dom";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(true);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleHomeClick = () => {
    navigate("/");
  }
  return (
    <header className="header">
      <div className="header-left">
        <button
          className={`menu-button ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          data-testid="menu-button"
        >
          <i className="fas fa-bars"></i>
        </button>
        {isMenuOpen && (
          <>
            <button className="menu-item" onClick={handleHomeClick}>HOME</button>
            <button className="menu-item">SHOP</button>
            <button className="menu-item">MAGAZINE</button>
          </>
        )}
      </div>
      <div className="header-right">
        <button className="icon-button " data-testid="search-button">
          <i className="fas fa-search"></i>
        </button>
        <button className="icon-button" data-testid="cart-button">
          <i className="fas fa-shopping-cart"></i>
        </button>
        <button className="login-button">LOGIN</button>
      </div>
    </header>
  );
}

export default Header;
