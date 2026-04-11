import { Fragment, useEffect, useState, type MouseEvent } from 'react'
import { Link } from 'react-router'
import { NAV_ROUTES, getChildRoutes, getRouteByPath } from '@/routes/routes'
import { useGlobalContext } from '@/common/context/useGlobalContext'

import styles from './NavMenu.module.css'

const NavMenu = () => {
    const { closeNav, isNavOpen } = useGlobalContext()
    const [expandedPath, setExpandedPath] = useState<string | null>(null)

    const onParentClick = (
        event: MouseEvent<HTMLAnchorElement>,
        routePath: string,
        hasSubRoutes: boolean
    ) => {
        if (!hasSubRoutes) {
            closeNav()
            return
        }

        event.preventDefault()
        setExpandedPath(routePath)
    }

    useEffect(() => {
        if (!isNavOpen) {
            setExpandedPath(null)
        }
    }, [isNavOpen])

    const expandedRoute = expandedPath ? getRouteByPath(expandedPath) : null
    const visibleRoutes = expandedRoute
        ? [
              {
                  path: expandedRoute.path,
                  label: 'Overview',
                  hasSubRoutes: false,
              },
              ...getChildRoutes(expandedRoute.path).map(({ path, label }) => ({
                  path,
                  label,
                  hasSubRoutes: getChildRoutes(path).length > 0,
              })),
          ]
        : NAV_ROUTES.map(({ path, label }) => ({
              path,
              label,
              hasSubRoutes: getChildRoutes(path).length > 0,
          }))

    return (
        <nav id="mobile-nav-menu" className={styles.navMenu}>
            <hr className={styles.hr} />
            {expandedRoute && (
                <>
                    <p className={styles.subMenuHeading}>{expandedRoute.label}</p>
                    <hr className={styles.hr} />
                </>
            )}
            {visibleRoutes.map(({ path, label, hasSubRoutes }) => {
                return (
                    <Fragment key={path}>
                        <Link
                            to={path}
                            className={styles.navButton}
                            onClick={(event) => onParentClick(event, path, hasSubRoutes)}
                        >
                            {label}
                        </Link>
                        <hr className={styles.hr} />
                    </Fragment>
                )
            })}
            <Link to="/contact-me" className={styles.specialNavButton} onClick={closeNav}>
                Contact Me
            </Link>
            <hr className={styles.hr} />
        </nav>
    )
}

export default NavMenu
