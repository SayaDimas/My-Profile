import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Footer.css';
import '../styles/ScrollReveal.css';

export default function Footer() {
  const { ref, isVisible } = useScrollReveal();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div 
        ref={ref}
        className={`footer-container reveal-fade-up ${isVisible ? 'visible' : ''}`}
      >
        <div className={`footer-content reveal-stagger ${isVisible ? 'visible' : ''}`}>
          <div className="footer-section">
            <h3>🌿 About</h3>
            <p>Seorang developer yang passionate dalam membuat web applications yang modern dan user-friendly.</p>
          </div>

          <div className="footer-section">
            <h3>🍃 Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#sertifikat">Skills</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>🌳 Follow Me</h3>
            <div className="social-links">
              <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/dimas-rifki-nuramadani-655230193/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} MyPortfolio. Made with 🌿 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
