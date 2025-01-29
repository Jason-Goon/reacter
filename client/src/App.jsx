// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<h1 className="text-2xl p-6">Welcome to MoneyTracker</h1>} />
            <Route path="/articles" element={<h1 className="text-2xl p-6">Articles</h1>} />
            <Route path="/budget" element={<h1 className="text-2xl p-6">Budget</h1>} />
            <Route path="/about" element={<h1 className="text-2xl p-6">About</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
