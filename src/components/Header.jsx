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

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const targetId = href.replace(/.*#/, '');
    const elem = document.getElementById(targetId);

    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
      });
    }
    closeMobileMenu();
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="main-nav">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img src="/images/Bentley White.png" alt="BentleyEdu Logo" className="logo-image" />
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
            <Link to="/#about" onClick={handleSmoothScroll}>
              <span className="nav-icon">ℹ️</span>
              About
            </Link>
          </li>
          <li>
            <Link to="/#courses" onClick={handleSmoothScroll}>
              <span className="nav-icon">📚</span>
              Courses
            </Link>
          </li>
          <li>
            <Link to="/#contact" onClick={handleSmoothScroll}>
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
