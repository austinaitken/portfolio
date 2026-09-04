import { useState, type MouseEvent } from 'react'
import logo from '@/assets/images/Austin_Portfolio_Logo.png'
import { Link, useLocation, useNavigate } from 'react-router'
import { NAV_ROUTES, getChildRoutes, getParentRoutePath, getRouteByPath } from '@/routes/routes'
import { useGlobalContext } from '@/common/context/useGlobalContext'

import styles from './Header.module.css'

const FADE_ORDERS: readonly string[] = [
    styles.fadeOrder0,
    styles.fadeOrder1,
    styles.fadeOrder2,
    styles.fadeOrder3,
    styles.fadeOrder4,
    styles.fadeOrder5,
    styles.fadeOrder6,
    styles.fadeOrder7,
]

const Header = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { isNavOpen, toggleNav, closeNav } = useGlobalContext()
    const [expandedPath, setExpandedPath] = useState<string | null>(null)
    const [prevPathname, setPrevPathname] = useState(pathname)
    if (prevPathname !== pathname) {
        setPrevPathname(pathname)
        if (
            expandedPath !== null &&
            pathname !== expandedPath &&
            !pathname.startsWith(`${expandedPath}/`)
        ) {
            setExpandedPath(null)
        }
    }

    const navigateToContact = () => {
        setExpandedPath(null)
        closeNav()
        void navigate('/contact-me')
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

    return (
        <header className={styles.header}>
            <div className={styles.innerHeaderContainer}>
                <Link
                    to="/"
                    onClick={() => {
                        setExpandedPath(null)
                        closeNav()
                    }}
                    className={`${styles.logoButton} ${styles.cascadeItem} ${FADE_ORDERS[0]}`}
                >
                    <img className={styles.logo} src={logo} alt="Austin Aitken profile picture" />
                </Link>
                {visibleRoutes.map((route, index) => {
                    const subRoutes = getChildRoutes(route.path)
                    const showSubRoutes = expandedRoute?.path === route.path && subRoutes.length > 0

                    return (
                        <div
                            key={route.path}
                            className={`${styles.routeGroup} ${styles.cascadeItem} ${FADE_ORDERS[index + 1]}`}
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
                    className={`${styles.navButton} ${styles.cascadeItem} ${FADE_ORDERS[7]}`}
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
