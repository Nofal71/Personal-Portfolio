import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import { theme } from './ThemeProvider/ThemeProvider.jsx'
import ScrollContext from './ContextAPI/ScrollContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScrollContext>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ScrollContext>
  </StrictMode>,
)
