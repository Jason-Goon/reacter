// src/components/Header.jsx
import { Link } from 'react-router-dom'
import '../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">MoneyTracker</Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/articles" className="nav-link">Articles</Link>
          <Link to="/budget" className="nav-link">Budget</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/login" className="nav-link login">Login</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
