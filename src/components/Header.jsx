import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="main-nav">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <span className="logo-icon">🎓</span>
          BentleyEdu
        </Link>
        
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
        
        <ul className={isMobileMenuOpen ? 'active' : ''}>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              <span className="nav-icon">🏠</span>
              Home
            </Link>
          </li>
          <li>
            <Link to="/#about" onClick={closeMobileMenu}>
              <span className="nav-icon">ℹ️</span>
              About
            </Link>
          </li>
          <li>
            <Link to="/#courses" onClick={closeMobileMenu}>
              <span className="nav-icon">📚</span>
              Courses
            </Link>
          </li>
          <li>
            <Link to="/#contact" onClick={closeMobileMenu}>
              <span className="nav-icon">📞</span>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
