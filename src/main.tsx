import 'modern-normalize/modern-normalize.css';
import './styles/fonts.scss';
import './styles/global.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}/>
      </Routes>
    </Router>
 </StrictMode>,
)
