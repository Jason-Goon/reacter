import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import './styles/App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <div className="fade-in">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route 
                path="/" 
                element={
                  <div className="page-container">
                    <h1 className="page-title">
                      Welcome to MoneyTracker
                    </h1>
                    <div className="content-card">
                      <p className="text-secondary">
                        Track your expenses and manage your budget with ease
                      </p>
                    </div>
                  </div>
                } 
              />
              <Route 
                path="/articles" 
                element={
                  <div className="page-container">
                    <h1 className="page-title">Articles</h1>
                  </div>
                } 
              />
              <Route 
                path="/budget" 
                element={
                  <div className="page-container">
                    <h1 className="page-title">Budget</h1>
                  </div>
                } 
              />
              <Route 
                path="/about" 
                element={
                  <div className="page-container">
                    <h1 className="page-title">About</h1>
                  </div>
                } 
              />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
