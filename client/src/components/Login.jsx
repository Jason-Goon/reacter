// src/components/Login.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'

function Login() {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Hardcoded credentials check
    if (credentials.username === 'catsex' && credentials.password === 'dogballs') {
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('username', credentials.username)
      navigate('/account')
    } else {
      setError('Invalid credentials. Use demo/demo to login.')
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p className="login-hint">U: catsex  P: dogballs</p>
      </div>
    </div>
  )
}

export default Login
