import 'modern-normalize/modern-normalize.css';
import './styles/fonts.scss';
import './styles/global.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Offer from './components/Offer.tsx';
import ProductPage from './ui/ProductPage.tsx';
import SolarCalculator from './ui/SolarCalculator.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="oferta" element={<Offer />} />
          <Route path="oferta/:category" element={<Offer />} />
          <Route path="oferta/:category/:section" element={<Offer />} />
          <Route path="oferta/:category/kalkulatorsloneczny" element={<SolarCalculator />} />
          <Route path="oferta/:category/:product" element={<ProductPage />} />
          <Route path="oferta/:category/:section/:product" element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
 </StrictMode>,
)
