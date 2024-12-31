import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
import App from './effects/App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)