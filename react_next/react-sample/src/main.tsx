import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Message from './components/Message.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Message />
  </StrictMode>,
)
 