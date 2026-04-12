import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './ContactMePage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import ContactMeGraphic from './components/ContactMeGraphic/ContactMeGraphic'

const ContactMePage = () => {
    // const fullTitle = `${titleStart} ${titleEnd}`.trim()

    // const handlePhoneCopy = () => {
    //     navigator.clipboard.writeText('+1 (709) 770-3770')
    // }

    // const handleEmailCopy = () => {
    //     navigator.clipboard.writeText('austinlaitken@gmail.com')
    // }

    const handlePhoneCall = () => {
        window.location.href = 'tel:+17097703770'
    }

    const handleEmail = () => {
        window.location.href = 'mailto:austinlaitken@gmail.com'
    }

    const handlePhoneMessage = () => {
        window.location.href = 'sms:+17097703770'
    }

    return (
        <section id="contact" className={styles.container}>
            {/* <div className={styles.titleContainer}>
                <h2 className={styles.title} aria-label={fullTitle}>
                    {titleStart}
                    <span className={styles.visuallyHidden}> {titleEnd}</span>
                </h2>
                <div className={styles.titleDrawing}>
                    <AnimatedDrawing
                        drawing={titleEndDrawing}
                        aria-hidden="true"
                        focusable="false"
                        strokeColor="var(--color-text-primary)"
                    />
                </div>
            </div> */}
            <PageIntroduction
                titleStart="Contact Me"
                titleEnd="Today"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<ContactMeGraphic />}
                description="Let's discuss the impact I can bring to your team and organization."
                buttonLabel="Call Me"
                buttonAction={handlePhoneCall}
            />
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>Contact Options</p>
                </div>
                <span className={styles.dividerLine} />
            </div>
            <div
                style={{
                    width: '80%',
                    gap: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // border: '1px solid gold',
                }}
                className={styles.experienceMain}
            >
                <div className={styles.buttonContainer}>
                    <button className={styles.contactButton} onClick={handlePhoneCall}>
                        📞<p>Call</p>
                        {/* <p>+1 (709) 770-3770</p> */}
                    </button>
                    <button className={styles.contactButton} onClick={handlePhoneMessage}>
                        💬<p>Message</p>
                        {/* <p>+1 (709) 770-3770</p> */}
                    </button>
                    <button className={styles.contactButton} onClick={handleEmail}>
                        📧<p>Email</p>
                        {/* <p>austinlaitken@gmail.com</p> */}
                    </button>
                    <button className={styles.contactButton}>
                        in<p>LinkedIn</p>
                        {/* <p>linkedin.com/in/austin-aitken</p> */}
                    </button>
                    {/* <div className={styles.addressButtonContainer}>
                    <button className="tertiaryButton" onClick={handleEmailCopy}>
                        austinlaitken@gmail.com
                    </button>
                    <button className="iconButton" onClick={handleEmail}>
                        📧
                    </button>
                </div>
                <div className={styles.addressButtonContainer}>
                    <button className="tertiaryButton" onClick={handlePhoneCopy}>
                        + 1 (709) 770-3770
                    </button>
                    <button className="iconButton" onClick={handlePhoneCall}>
                        📞
                    </button>
                    <button className="iconButton" onClick={handlePhoneMessage}>
                        💬
                    </button>
                </div>
                <div>
                    <button className="tertiaryButton">LinkedIn Message</button>
                </div> */}
                </div>
                <div>
                    <p>+1 (709) 770-3770</p>
                    <p>austinlaitken@gmail.com</p>
                    <p>linkedin.com/in/austin-aitken</p>
                </div>
            </div>
        </section>
    )
}

export default ContactMePage
