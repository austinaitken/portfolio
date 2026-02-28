import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalProvider } from '@/common/context/GlobalContext'
import App from '@/top-level/App/App'
import profilePic from '@/assets/images/profile_pic_1080.webp'

import '@/common/styles/format.css'
import '@/common/styles/text.css'
import '@/common/styles/image.css'

const preloadImage = document.createElement('link')
preloadImage.rel = 'preload'
preloadImage.as = 'image'
preloadImage.href = profilePic
document.head.appendChild(preloadImage)

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router>
            <GlobalProvider>
                <App />
            </GlobalProvider>
        </Router>
    </StrictMode>
)
