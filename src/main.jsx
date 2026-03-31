import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* BrowserRouter sabse bahar isliye lagaya hai kyunkay 
        yeh pura application mein routing ko iJazat deta hey*/}
    {/* BrowserRouter React Router ka main wrapper hai */}
    <BrowserRouter>

      {/* Ab yahan se pura App component routing ke saath chalega */}
      <App />

    </BrowserRouter>

  </StrictMode>,
)