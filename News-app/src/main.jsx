import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import NewsContext from './context/NewsContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NewsContext>
      <App />
    </NewsContext>
  </BrowserRouter>
)
