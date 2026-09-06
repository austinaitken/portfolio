import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Link } from 'react-router'

import styles from './ErrorBoundary.module.css'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = { hasError: false }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className={styles.container} role="alert">
                    <h1>Something went wrong</h1>
                    <p className={styles.message}>
                        An unexpected error occurred while loading this page.
                    </p>
                    <Link to="/" className={styles.backLink}>
                        Back to Overview
                    </Link>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
