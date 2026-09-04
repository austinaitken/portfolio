import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router'

import { GlobalProvider } from '@/common/context/GlobalContext'

import App from '@/top-level/App/App'

import '@/common/styles/main.css'

const rootElement = document.getElementById('root')
if (!rootElement) {
    throw new Error('Root element #root not found')
}

createRoot(rootElement).render(
    <StrictMode>
        <Router>
            <GlobalProvider>
                <App />
            </GlobalProvider>
        </Router>
    </StrictMode>
)
