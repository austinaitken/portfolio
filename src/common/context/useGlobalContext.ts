import { createContext, use } from 'react'

export interface GlobalContextProps {
    isNavOpen: boolean
    toggleNav: () => void
    closeNav: () => void
}

export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined)

export const useGlobalContext = (): GlobalContextProps => {
    const context = use(GlobalContext)
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalProvider')
    }
    return context
}
