import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { App } from './App'

//buxa uma estrutura do html e  renderiza  um estrutura do react
createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <App/>
  </StrictMode>,
)
