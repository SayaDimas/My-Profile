import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">🌿</span>
          <span className="logo-text">MyProfile</span>
        </div>

        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <button onClick={() => handleScrollTo('home')} className="nav-link">
              Home
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleScrollTo('sertifikat')} className="nav-link">
              Skills
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleScrollTo('portfolio')} className="nav-link">
              Portfolio
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleScrollTo('contact')} className="nav-link">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
