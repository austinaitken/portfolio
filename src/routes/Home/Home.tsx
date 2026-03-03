import { useEffect, useRef, useState } from 'react'

import Intro from './components/Intro/Intro'
import Experience from './components/Experience/Experience'
import Entrepreneurship from './components/Entrepreneurship/Entrepreneurship'
import Personality from './components/Personality/Personality'
import Qualifications from './components/Qualifications/Qualifications'
import Contact from './components/Contact/Contact'
import Resources from './components/Resources/Resources'

import styles from './Home.module.css'

const SECTION_FADE_IN_DURATION_MS = 550
const INTRO_FADE_IN_DURATION_MS = 1400

const Home = () => {
    const sectionItems = [
        { key: 'experience', element: <Experience /> },
        { key: 'entrepreneurship', element: <Entrepreneurship /> },
        { key: 'qualifications', element: <Qualifications /> },
        { key: 'personality', element: <Personality /> },
        { key: 'resources', element: <Resources /> },
        { key: 'contact', element: <Contact /> },
    ]

    const sectionCount = sectionItems.length
    const sectionRefs = useRef<Array<HTMLDivElement | null>>(Array(sectionCount).fill(null))
    const revealTimeoutRef = useRef<number | null>(null)
    const introTimeoutRef = useRef<number | null>(null)

    const [hasEnteredViewport, setHasEnteredViewport] = useState<boolean[]>(
        Array(sectionCount).fill(false)
    )
    const [isVisible, setIsVisible] = useState<boolean[]>(Array(sectionCount).fill(false))
    const [completedRevealCount, setCompletedRevealCount] = useState(0)
    const [isRevealing, setIsRevealing] = useState(false)
    const [isIntroRevealComplete, setIsIntroRevealComplete] = useState(false)

    useEffect(() => {
        introTimeoutRef.current = window.setTimeout(() => {
            introTimeoutRef.current = null
            setIsIntroRevealComplete(true)
        }, INTRO_FADE_IN_DURATION_MS)

        return () => {
            if (introTimeoutRef.current === null) return
            window.clearTimeout(introTimeoutRef.current)
        }
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                setHasEnteredViewport((previous) => {
                    const next = [...previous]
                    let hasChanges = false

                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) return

                        const index = Number((entry.target as HTMLElement).dataset.sectionIndex)
                        if (Number.isNaN(index)) return
                        if (next[index]) return

                        next[index] = true
                        hasChanges = true
                    })

                    return hasChanges ? next : previous
                })
            },
            {
                threshold: 0,
                rootMargin: '0px',
            }
        )

        sectionRefs.current.forEach((sectionRef) => {
            if (!sectionRef) return
            observer.observe(sectionRef)
        })

        return () => {
            observer.disconnect()
        }
    }, [])

    const isSectionEligibleForReveal = (index: number) => {
        const sectionElement = sectionRefs.current[index]
        if (!sectionElement) return false

        if (hasEnteredViewport[index]) return true

        const sectionRect = sectionElement.getBoundingClientRect()

        return sectionRect.bottom <= 0
    }

    useEffect(() => {
        if (!isIntroRevealComplete) return
        if (completedRevealCount >= sectionCount) return
        if (isRevealing || revealTimeoutRef.current !== null) return
        if (!isSectionEligibleForReveal(completedRevealCount)) return

        setIsRevealing(true)
        setIsVisible((previous) => {
            const next = [...previous]
            next[completedRevealCount] = true
            return next
        })

        revealTimeoutRef.current = window.setTimeout(() => {
            revealTimeoutRef.current = null
            setCompletedRevealCount((previous) => previous + 1)
            setIsRevealing(false)
        }, SECTION_FADE_IN_DURATION_MS)
    }, [completedRevealCount, hasEnteredViewport, isIntroRevealComplete, isRevealing, sectionCount])

    useEffect(
        () => () => {
            if (revealTimeoutRef.current === null) return
            window.clearTimeout(revealTimeoutRef.current)
        },
        []
    )

    return (
        <div className={styles.container}>
            <Intro />
            {sectionItems.map((section, index) => (
                <div
                    key={section.key}
                    ref={(element) => {
                        sectionRefs.current[index] = element
                    }}
                    data-section-index={index}
                    className={`${styles.sectionWrapper} ${isVisible[index] ? styles.sectionVisible : ''}`}
                >
                    {section.element}
                </div>
            ))}
        </div>
    )
}

export default Home
