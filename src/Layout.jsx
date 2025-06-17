import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useUser } from '../lib/context/user';
import { FaMoon, FaSun, FaInstagram, FaLinkedin, FaEnvelope, FaYoutube, FaBars, FaTimes, FaPhone } from 'react-icons/fa';

function Layout() {
  const { isDarkMode, toggleDarkMode } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear(); // Get current year

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-left">
          
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Me</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        <div className="header-right">
          <button
            className="theme-toggle"
            onClick={toggleDarkMode}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="app-footer">
        <p>© {currentYear} C. Lindberg</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/e.catarina.l/" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/catarina-lindberg-4902a0133/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:e.catarina.l@outlook.com" title="Email">
            <FaEnvelope />
          </a>
          <a href="https://www.youtube.com/@silverelle_5810" target="_blank" rel="noopener noreferrer" title="YouTube">
            <FaYoutube />
          </a>
          <a href="tel:+18018607171">
            <FaPhone />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Layout;