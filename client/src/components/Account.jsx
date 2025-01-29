// src/components/Account.jsx
import { useState, useEffect } from 'react'
import '../styles/Account.css'

function Account() {
  const [userData, setUserData] = useState({
    username: 'DemoUser',
    email: 'demo@example.com',
    joinDate: '2025-01-29'
  })

  return (
    <div className="account-container">
      <div className="account-header">
        <h1>Account Overview</h1>
      </div>
      <div className="account-card">
        <div className="account-info">
          <div className="info-group">
            <label>Username</label>
            <p>{userData.username}</p>
          </div>
          <div className="info-group">
            <label>Email</label>
            <p>{userData.email}</p>
          </div>
          <div className="info-group">
            <label>Member Since</label>
            <p>{userData.joinDate}</p>
          </div>
        </div>
        <button className="logout-button" onClick={() => {
          localStorage.removeItem('isLoggedIn');
          window.location.href = '/';
        }}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Account
