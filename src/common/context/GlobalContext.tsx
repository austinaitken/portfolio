import { useCallback, useMemo, useRef, useState } from 'react'
import type { ReactNode, FC, RefObject } from 'react'

import { GlobalContext } from './useGlobalContext'

export const GlobalProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

    const toggleNav = useCallback(() => {
        setIsNavOpen((prevNav) => !prevNav)
    }, [])

    const setNavOpen = useCallback((openNav: boolean) => {
        setIsNavOpen(openNav)
    }, [])

    const introRef = useRef<HTMLDivElement>(null)
    const experienceRef = useRef<HTMLDivElement>(null)
    const entrepreneurshipRef = useRef<HTMLDivElement>(null)
    const qualificationsRef = useRef<HTMLDivElement>(null)
    const personalityRef = useRef<HTMLDivElement>(null)
    const contactRef = useRef<HTMLDivElement>(null)
    const resourcesRef = useRef<HTMLDivElement>(null)

    const scrollToSection = useCallback(
        (ref: RefObject<HTMLDivElement | null>) => {
            const targetElement = ref.current
            if (!targetElement) {
                return
            }

            setNavOpen(false)

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    const rootStyles = getComputedStyle(document.documentElement)
                    const headerOffset =
                        Number.parseFloat(rootStyles.getPropertyValue('--header-scroll-offset')) ||
                        0
                    const targetTop =
                        targetElement.getBoundingClientRect().top + window.scrollY - headerOffset

                    window.scrollTo({
                        top: Math.max(targetTop, 0),
                        behavior: 'smooth',
                    })
                })
            })
        },
        [setNavOpen]
    )

    const scrollToIntro = useCallback(() => {
        scrollToSection(introRef)
    }, [scrollToSection])

    const scrollToExperience = useCallback(() => {
        scrollToSection(experienceRef)
    }, [scrollToSection])

    const scrollToEntrepreneurship = useCallback(() => {
        scrollToSection(entrepreneurshipRef)
    }, [scrollToSection])

    const scrollToQualifications = useCallback(() => {
        scrollToSection(qualificationsRef)
    }, [scrollToSection])

    const scrollToPersonality = useCallback(() => {
        scrollToSection(personalityRef)
    }, [scrollToSection])

    const scrollToContact = useCallback(() => {
        scrollToSection(contactRef)
    }, [scrollToSection])

    const scrollToResources = useCallback(() => {
        scrollToSection(resourcesRef)
    }, [scrollToSection])

    const value = useMemo(
        () => ({
            introRef,
            experienceRef,
            entrepreneurshipRef,
            qualificationsRef,
            personalityRef,
            contactRef,
            resourcesRef,
            isNavOpen,
            toggleNav,
            setNavOpen,
            scrollToIntro,
            scrollToExperience,
            scrollToEntrepreneurship,
            scrollToQualifications,
            scrollToPersonality,
            scrollToContact,
            scrollToResources,
        }),
        [
            isNavOpen,
            toggleNav,
            setNavOpen,
            scrollToIntro,
            scrollToExperience,
            scrollToEntrepreneurship,
            scrollToQualifications,
            scrollToPersonality,
            scrollToContact,
            scrollToResources,
        ]
    )

    return <GlobalContext value={value}>{children}</GlobalContext>
}
