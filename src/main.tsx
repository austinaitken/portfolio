import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalProvider } from '@/common/context/GlobalContext'
import App from '@/top-level/App/App'

import '@/common/styles/format.css'
import '@/common/styles/text.css'
import '@/common/styles/image.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Router>
  </StrictMode>
)
