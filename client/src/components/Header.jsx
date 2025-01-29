// src/components/Header.jsx
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(loginStatus)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('username')
    setIsLoggedIn(false)
    navigate('/')
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">Moneysaver.fi</Link>
        
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/articles" className="nav-link" onClick={() => setIsMenuOpen(false)}>Articles</Link>
          <Link to="/budget" className="nav-link" onClick={() => setIsMenuOpen(false)}>Budget</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
          {isLoggedIn ? (
            <>
              <Link to="/account" className="nav-link" onClick={() => setIsMenuOpen(false)}>Account</Link>
              <button onClick={handleLogout} className="nav-link logout">Logout</button>
            </>
          ) : (
            <Link to="/login" className="nav-link login" onClick={() => setIsMenuOpen(false)}>Login</Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
