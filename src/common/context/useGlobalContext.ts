import { createContext, use } from 'react'
import type { RefObject } from 'react'

type SectionRef = RefObject<HTMLDivElement | null>

export interface GlobalContextProps {
    introRef: SectionRef
    experienceRef: SectionRef
    entrepreneurshipRef: SectionRef
    qualificationsRef: SectionRef
    personalityRef: SectionRef
    contactRef: SectionRef
    resourcesRef: SectionRef
    isNavOpen: boolean
    toggleNav: () => void
    setNavOpen: (openNav: boolean) => void
    scrollToIntro: () => void
    scrollToExperience: () => void
    scrollToEntrepreneurship: () => void
    scrollToQualifications: () => void
    scrollToPersonality: () => void
    scrollToContact: () => void
    scrollToResources: () => void
}

export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined)

export const useGlobalContext = (): GlobalContextProps => {
    const context = use(GlobalContext)
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalProvider')
    }
    return context
}
