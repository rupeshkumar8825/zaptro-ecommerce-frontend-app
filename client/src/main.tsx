import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css" // importing this is very important in order to use the tailwind css

// TODO : NEED TO INTEGRATE THE CLERK TO BE ABLE TO LOGIN USING THE CLERK WITHOUT USING. 
// ACTUAL BACKEND. SINCE THIS IS AN FRONTEND APPLICATION HENCE THIS IS THE IDEAL AND FASTER
// IMPLEMENTATION THAT WE COULD HAVE FOR THIS PURPOSE. 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
