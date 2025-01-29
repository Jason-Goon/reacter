// src/components/Header.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">Moneysaver.fi</Link>
        
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/articles" className="nav-link" onClick={() => setIsMenuOpen(false)}>Articles</Link>
          <Link to="/budget" className="nav-link" onClick={() => setIsMenuOpen(false)}>Budget</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/login" className="nav-link login" onClick={() => setIsMenuOpen(false)}>Login</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
