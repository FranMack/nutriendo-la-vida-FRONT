import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/styles.scss'
import { BrowserRouter } from 'react-router-dom'
import { StepContextProvider } from './context/questionarySteps.context.tsx'
import { ShopingCartContextProvider } from './context/shopingCart.context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <StepContextProvider>
      <ShopingCartContextProvider>
    <App />
    </ShopingCartContextProvider>
    </StepContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
