import { useState } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">MyProfile</span>
        </div>

        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <button onClick={() => handleScroll('home')} className="nav-link">
              Home
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleScroll('skills')} className="nav-link">
              Skills
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleScroll('portfolio')} className="nav-link">
              Portfolio
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleScroll('contact')} className="nav-link">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
