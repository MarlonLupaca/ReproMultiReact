import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserProvider } from "./context/ContextoGlobal";
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ToastContainer />
      <App />
    </UserProvider>
    
  </StrictMode>
)
