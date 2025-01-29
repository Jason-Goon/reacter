// src/components/Footer.jsx
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Moneysaver.fi</h3>
          <p>Track your expenses and manage your budget with ease</p>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <a href="/about">Tietoa</a>
          <a href="/articles">Artikkelits</a>
          <a href="/budget">Budjetti</a>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>cto@moneysaver.fi</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 moneysaver.fi All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
