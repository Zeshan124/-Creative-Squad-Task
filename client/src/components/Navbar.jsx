import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ModernNavbar.css'; // Import your custom CSS for Navbar styling

const ModernNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">My Website</Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ModernNavbar;
