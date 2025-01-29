// src/components/Header.jsx
function Header() {
    return (
      <header className="bg-gray-800 text-white">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-xl font-bold">MoneyTracker</a>
            <a href="/articles" className="hover:text-gray-300">Articles</a>
            <a href="/budget" className="hover:text-gray-300">Budget</a>
            <a href="/about" className="hover:text-gray-300">About</a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Welcome, Admin</span>
            <button className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">Logout</button>
          </div>
        </nav>
      </header>
    )
  }
  
  export default Header  // Add this line
  