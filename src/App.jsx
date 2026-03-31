import React from 'react'
import MainRoutes from './Routes/MainRoutes'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>

      {/* Header Section - Website ka top navigation bar */}
      <header>
        <nav>
          <ul>

            {/* Link component se navigation banaya hai */}
            {/* Link use karne se page full reload nahi hota, sirf URL change hota hai */}

            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            
            {/* Users link - yahan hum static link de rahe hain.
                Dynamic users page (/users/:id) ke liye alag se links bana sakte hain */}
            <li><Link to='/users'>Users</Link></li>

          </ul>
        </nav>
      </header>

      {/* Main Content Area */}
      {/* Yahan Routes component render ho raha hai jo URL ke hisaab se 
          different pages (Home, About, Contact etc.) dikhayega */}
      <MainRoutes />

    </div>
  )
}

export default App