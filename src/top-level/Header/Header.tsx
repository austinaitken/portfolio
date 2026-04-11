import { useEffect, useState, type MouseEvent } from 'react'
import logo from '@/assets/images/Austin_Portfolio_Logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { NAV_ROUTES, getChildRoutes, getParentRoutePath, getRouteByPath } from '@/routes/routes'
import { useGlobalContext } from '@/common/context/useGlobalContext'

import styles from './Header.module.css'

const Header = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { isNavOpen, toggleNav, closeNav } = useGlobalContext()
    const [expandedPath, setExpandedPath] = useState<string | null>(null)

    useEffect(() => {
        setExpandedPath((previousPath) => {
            if (
                previousPath &&
                pathname !== previousPath &&
                !pathname.startsWith(`${previousPath}/`)
            ) {
                return null
            }

            return previousPath
        })
    }, [pathname])

    const navigateToContact = () => {
        setExpandedPath(null)
        closeNav()
        navigate('/contact-me')
    }

    const onRouteClick = (
        event: MouseEvent<HTMLAnchorElement>,
        routePath: string,
        hasSubRoutes: boolean
    ) => {
        if (hasSubRoutes && expandedPath === routePath) {
            event.preventDefault()
            setExpandedPath(getParentRoutePath(routePath))
            return
        }

        if (hasSubRoutes && expandedPath !== routePath) {
            event.preventDefault()
            setExpandedPath(routePath)
            return
        }

        closeNav()
    }

    const expandedRoute = expandedPath ? getRouteByPath(expandedPath) : null
    const visibleRoutes = expandedRoute ? [expandedRoute] : NAV_ROUTES

    // const scrollToContact = () => {
    //     setExpandedPath(null)
    //     closeNav()
    //     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    // }

    return (
        <header className={styles.header}>
            <div className={styles.innerHeaderContainer}>
                <Link
                    to="/"
                    onClick={() => {
                        setExpandedPath(null)
                        closeNav()
                    }}
                    className={`${styles.logoButton} ${styles.cascadeItem} ${styles.fadeOrder0}`}
                >
                    <img className={styles.logo} src={logo} alt="Austin Aitken profile picture" />
                </Link>
                {visibleRoutes.map((route, index) => {
                    const subRoutes = getChildRoutes(route.path)
                    const showSubRoutes = expandedRoute?.path === route.path && subRoutes.length > 0

                    return (
                        <div
                            key={route.path}
                            className={`${styles.routeGroup} ${styles.cascadeItem} ${styles[`fadeOrder${index + 1}`]}`}
                        >
                            <Link
                                to={route.path}
                                onClick={(event) =>
                                    onRouteClick(event, route.path, subRoutes.length > 0)
                                }
                                className={styles.sectionButton}
                            >
                                {route.label}
                            </Link>
                            {showSubRoutes && (
                                <div className={styles.subRouteList}>
                                    <span className={styles.routeSeparator} aria-hidden="true">
                                        |
                                    </span>
                                    <Link
                                        to={route.path}
                                        onClick={() => {
                                            setExpandedPath(getParentRoutePath(route.path))
                                            closeNav()
                                        }}
                                        className={styles.subRouteLink}
                                    >
                                        Overview
                                    </Link>
                                    {subRoutes.map((subRoute) => {
                                        const hasNestedSubRoutes =
                                            getChildRoutes(subRoute.path).length > 0

                                        return (
                                            <Link
                                                key={subRoute.path}
                                                to={subRoute.path}
                                                onClick={(event) =>
                                                    onRouteClick(
                                                        event,
                                                        subRoute.path,
                                                        hasNestedSubRoutes
                                                    )
                                                }
                                                className={styles.subRouteLink}
                                            >
                                                {subRoute.label}
                                            </Link>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    )
                })}
                <button type="button" className={styles.contactButton} onClick={navigateToContact}>
                    Contact Me
                </button>
                <button
                    type="button"
                    className={`${styles.navButton} ${styles.cascadeItem} ${styles.fadeOrder7}`}
                    onClick={toggleNav}
                    aria-label={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isNavOpen}
                    aria-controls="mobile-nav-menu"
                >
                    <span className={isNavOpen ? styles.close : styles.bars}>
                        {isNavOpen ? '✕' : '☰'}
                    </span>
                </button>
            </div>
        </header>
    )
}

export default Header
