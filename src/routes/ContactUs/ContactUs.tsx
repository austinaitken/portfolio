import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import styles from './ContactUs.module.css'

// const UserType = {
//     Veterinarian: 'veterinarian',
//     PetOwner: 'petOwner',
// } as const

// type UserType = typeof UserType[keyof typeof UserType]

const ContactUs = () => {
    const [message, setMessage] = useState<string>('')
    const [emailAddress, setEmailAddress] = useState<string>('')
    // const [userType, setUserType] = useState<UserType>(UserType.PetOwner)
    const [hasSentMessage, setHasSentMessage] = useState<boolean>(false)
    const [hasError, setHasError] = useState<boolean>(false)

    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const handleEmailAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailAddress(e.currentTarget.value)
    }

    // const handleUserTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    //     setUserType(e.currentTarget.value as UserType)
    // }

    const isValidForm = (): boolean => {
        return isValidEmail(emailAddress) && isValidMessage(message)
    }

    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const isValidMessage = (message: string): boolean => {
        return message.length > 0
    }

    const sendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setHasError(false)
        // console.log('Sending message:', message)
        const data = {
            Message: message,
            Email: emailAddress,
        }

        fetch('https://e3niiqcgx5.execute-api.us-east-1.amazonaws.com/main/website-contact-us', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((response) => {
            if (response.ok) {
                // Handle successful response
                // console.log('Message sent successfully')
                setHasSentMessage(true)
                setMessage('')
                setEmailAddress('')
            } else {
                // Handle error response
                setHasError(true)
                // console.log('Failed to send message')
            }
        })
        // .catch(error => {
        //     // Handle network error
        //     setHasError(true)
        //     // console.log('Network error:', error)
        // })
    }

    const goToWebApp = () => {
        window.open('https://app.phauna.io', '_blank')
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Want to Connect?</h1>
            {/* <p>Use the form below</p>
            <p>or</p> */}
            {hasError ? (
                <p className={styles.error}>
                    There was an error sending your message. Please try again later.
                </p>
            ) : hasSentMessage ? (
                <p className={styles.success}>
                    Thank you for reaching out! We usually respond within 24 hours.
                </p>
            ) : (
                <p className={styles.suggestion} onClick={goToWebApp}>
                    <span className={styles.signInLink}>Login</span> for our instant messenger
                    <br />
                    (Recommended)
                </p>
            )}
            <div className={styles.dividerOr}>
                <hr className={styles.hr} />
                <p style={{ margin: '15px', color: '#808080' }}>Or</p>
                <hr className={styles.hr} />
            </div>

            <form className={styles.form} onSubmit={sendMessage}>
                <label className={styles.label}>
                    What is your email address?
                    <input
                        className={styles.returnEmailAddressInput}
                        value={emailAddress}
                        onChange={handleEmailAddressChange}
                    />
                </label>
                <label className={styles.label} style={{ marginBottom: '0px' }}>
                    What is your message?
                    <textarea
                        className={styles.messageInput}
                        value={message}
                        onChange={handleMessageChange}
                    />
                </label>
                <button
                    className={styles.button}
                    style={{ backgroundColor: isValidForm() ? '#32ff95' : '#202020' }}
                    disabled={!isValidForm()}
                >
                    Send
                </button>
            </form>
        </div>
    )
}

export default ContactUs
