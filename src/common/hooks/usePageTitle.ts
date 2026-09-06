import { useEffect } from 'react'

const BASE_TITLE = 'Austin Aitken - Software Developer & Founder'

export const usePageTitle = (title: string): void => {
    useEffect(() => {
        document.title = `${title} - Austin Aitken`

        return () => {
            document.title = BASE_TITLE
        }
    }, [title])
}
