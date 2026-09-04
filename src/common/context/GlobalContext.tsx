import { useCallback, useMemo, useState } from 'react'
import type { ReactNode, FC } from 'react'

import { GlobalContext } from './useGlobalContext'

export const GlobalProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

    const toggleNav = useCallback(() => {
        setIsNavOpen((prevNav) => !prevNav)
    }, [])

    const closeNav = useCallback(() => {
        setIsNavOpen(false)
    }, [])

    const value = useMemo(
        () => ({
            isNavOpen,
            toggleNav,
            closeNav,
        }),
        [isNavOpen, toggleNav, closeNav]
    )

    return <GlobalContext value={value}>{children}</GlobalContext>
}
