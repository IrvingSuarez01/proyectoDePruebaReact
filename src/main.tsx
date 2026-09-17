import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import HeaderComponent from './components/HeaderComponent.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <HeaderComponent />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
