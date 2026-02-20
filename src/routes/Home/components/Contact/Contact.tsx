import styles from './Contact.module.css'

const Contact = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:austinlaitken@gmail.com'
    }

    const handleCallClick = () => {
        window.location.href = 'tel:+17097703770'
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Reach Out Today
            </h1>
            <div className={styles.buttonsContainer}>
                <button onClick={handleEmailClick}>
                    📧 austinlaitken@gmail.com
                </button>
                <button onClick={handleCallClick}>
                    📞 1 (709) 770-3770
                </button>
            </div>
        </div>
    )
}

export default Contact