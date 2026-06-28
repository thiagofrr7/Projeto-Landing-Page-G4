import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './css/style.css'
import App from './App.jsx'
import { IdiomaProvider } from './i18n/IdiomaContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <IdiomaProvider>
        <App />
      </IdiomaProvider>
    </BrowserRouter>
  </StrictMode>
)